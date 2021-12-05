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
            table.json('products')
        })
        return newDb
    },
    create: async (cartToCreate) => {
        cartToCreate.timestamp = moment(cartToCreate.timestamp).format('YYYY-MM-DD hh:mm:ss')
        cartToCreate.products = JSON.stringify(cartToCreate.products)
        const newCart = await mariadbclient.from("carts").insert(cartToCreate);
        return newCart;
    },
    getAll: async () => {
        let carts = await mariadbclient.from("carts").select('id', 'timestamp', 'products');
        return carts;  //TODO: turn products string into json
    },
    getById: async (selectedId) => {
        let cart = await mariadbclient("carts").where({ id: selectedId })
        if (cart && cart.length > 0) {
            let editedCart = [];
            const cartForResponse = { ...cart.at(0) }
            cartForResponse.products = JSON.parse(cartForResponse.products)
            editedCart.push(cartForResponse)
            return editedCart;
        }
        return cart;
    },
    addProducts: async (selectedId, newProduct) => {
        let prods = await mariadbclient("carts").where({ id: selectedId }).select('products')
        let { products } = prods.at(0)
        products = JSON.parse(products)
        if (newProduct) {
            products.push(newProduct)
        }
        const addedProductsInCart = await mariadbclient("carts").where({ id: selectedId }).update({ products: JSON.stringify(products) })
        return addedProductsInCart;

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