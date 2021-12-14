const moment = require("moment");
const { db_mariadb } = require("../../../services/MariadbClientService");
const mariadbclient = db_mariadb.client;

module.exports = {
    check: async () => {
        const db = await mariadbclient.schema.hasTable("carts")
        return db
    },
    createTable: async () => {
        const newDb = await mariadbclient.schema.createTable("carts", (table) => {
            table.increments('id')
            table.timestamp('timestamp')
        })
        return newDb
    },
    create: async (cartToCreate) => {
        cartToCreate.timestamp = moment(cartToCreate.timestamp).format('YYYY-MM-DD hh:mm:ss')
        const newCart = await mariadbclient.from("carts").insert(cartToCreate);
        return newCart;
    },
    getById: async (selectedId) => {
        const db = await mariadbclient.schema.hasTable("products_in_cart")
        if (!db) {
            await mariadbclient.schema.createTable("products_in_cart", (table) => {
                table.increments('id')
                table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE')
                table.integer('cart_id').unsigned().references('id').inTable('carts').onDelete('CASCADE').onUpdate('CASCADE')
            })
        }
        const cartInfo = await mariadbclient("products_in_cart")
            .innerJoin('carts', 'products_in_cart.cart_id', 'carts.id')
    
        const filteredCartInfo = cartInfo.filter((item) => (item.cart_id == selectedId));
        const productsInCart = filteredCartInfo.map((item) => {
            return item.product_id
        })
    
        const products = [];
    
        for (let i = 0; i < productsInCart.length; i++) {
            const element = await mariadbclient("products").where('id', '=', productsInCart[i])
            const { name, price, imageUrl, stock, code, description } = element.at(0)
            const obj = {
                id: productsInCart[i], name, price, imageUrl, stock, code, description
            }
            products.push(obj)
        }
        console.log(cartInfo)
        if(cartInfo && cartInfo.length > 0) {
            const { id, timestamp } = cartInfo.at(0)
            const cart = {
                id,
                timestamp,
                products
            }
            return cart;
        }
    },
    addProducts: async (selectedId, newProduct) => {
        const db = await mariadbclient.schema.hasTable("products_in_cart")
        if (db) {
            const added = await mariadbclient('products_in_cart').insert({ cart_id: +selectedId, product_id: newProduct })
            return added
        } else {
            await mariadbclient.schema.createTable("products_in_cart", (table) => {
                table.increments('id')
                table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE')
                table.integer('cart_id').unsigned().references('id').inTable('carts').onDelete('CASCADE').onUpdate('CASCADE')
            })
            const added = await mariadbclient('products_in_cart').insert({ cart_id: +selectedId, product_id: newProduct })
            return added
        }
    },
    deleteProducts: async (selectedId, productId) => {
        const prods = await mariadbclient("carts").where({ id: selectedId }).select('products')
        let { products } = prods.at(0)
        products = JSON.parse(products)
        products = products.filter((item) => {
            return item.id !== +productId
        })
        const deletedProductsInCart = await mariadbclient("carts").where({ id: selectedId }).update({ products: JSON.stringify(products) })
        if (deletedProductsInCart) {
            return +productId
        }
    },
    deleteById: async (idToDelete) => {
        const deletedCart = await mariadbclient("carts")
            .where({ id: +idToDelete })
            .del()
        return deletedCart
    },
    deleteAll: async () => {
        const truncatedTable = await mariadbclient("carts").truncate();
        return truncatedTable;
    }
}