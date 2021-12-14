const moment = require("moment");
const { db_sqlite } = require("../../../services/Sqlite3ClientService");
const sqliteclient = db_sqlite.client;

module.exports = {
    check: async () => {
        const db = await sqliteclient.schema.hasTable("carts")
        return db
    },
    createTable: async () => {
        const newDb = await sqliteclient.schema.createTable("carts", (table) => {
            table.increments('id')
            table.timestamp('timestamp')
        })
        return newDb
    },
    create: async (cartToCreate) => {
        cartToCreate.timestamp = moment(cartToCreate.timestamp).format('YYYY-MM-DD hh:mm:ss')
        const newCart = await sqliteclient.from("carts").insert(cartToCreate);
        return newCart;
    },
    getById: async (selectedId) => {
        const db = await sqliteclient.schema.hasTable("products_in_cart")
        if (!db) {
            await sqliteclient.schema.createTable("products_in_cart", (table) => {
                table.increments('id')
                table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE')
                table.integer('cart_id').unsigned().references('id').inTable('carts').onDelete('CASCADE').onUpdate('CASCADE')
            })
        }
        const cartById = await sqliteclient("carts").where('id', '=', selectedId)

        const cartInfo = await sqliteclient("products_in_cart")
            .innerJoin('carts', 'products_in_cart.cart_id', 'carts.id')
    
        const filteredCartInfo = cartInfo.filter((item) => (item.cart_id == selectedId));
        const productsInCart = filteredCartInfo.map((item) => {
            return item.product_id
        })
    
        const products = [];
    
        for (let i = 0; i < productsInCart.length; i++) {
            const element = await sqliteclient("products").where('id', '=', productsInCart[i])
            const { name, price, imageUrl, stock, code, description } = element.at(0)
            const obj = {
                id: productsInCart[i], name, price, imageUrl, stock, code, description
            }
            products.push(obj)
        }
        if (cartInfo && cartInfo.length > 0) {
            const { id, timestamp } = cartInfo.at(0)
            const cart = {
                id,
                timestamp,
                products
            }
            return cart;
        }
        if (cartById) {
            return cartById
        }
    },
    addProducts: async (selectedId, newProduct) => {
        const db = await sqliteclient.schema.hasTable("products_in_cart")
        if (db) {
            const added = await sqliteclient('products_in_cart').insert({ cart_id: +selectedId, product_id: newProduct })
            return added
        } else {
            await sqliteclient.schema.createTable("products_in_cart", (table) => {
                table.increments('id')
                table.integer('product_id').unsigned().references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE')
                table.integer('cart_id').unsigned().references('id').inTable('carts').onDelete('CASCADE').onUpdate('CASCADE')
            })
            const added = await sqliteclient('products_in_cart').insert({ cart_id: +selectedId, product_id: newProduct })
            return added
        }
    },
    deleteProducts: async (selectedId, productId) => {
        const prods = await sqliteclient("carts").where({ id: selectedId }).select('products')
        let { products } = prods.at(0)
        products = JSON.parse(products)
        products = products.filter((item) => {
            return item.id !== +productId
        })
        const deletedProductsInCart = await sqliteclient("carts").where({ id: selectedId }).update({ products: JSON.stringify(products) })
        if (deletedProductsInCart) {
            return +productId
        }
    },
    deleteById: async (idToDelete) => {
        const deletedCart = await sqliteclient("carts")
            .where({ id: +idToDelete })
            .del()
        return deletedCart
    },
    deleteAll: async () => {
        const truncatedTable = await sqliteclient("carts").truncate();
        return truncatedTable;
    }
}