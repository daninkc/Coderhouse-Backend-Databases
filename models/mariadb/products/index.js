const { db_mariadb } = require("../../../services/MariadbClientService");
const mariadbclient = db_mariadb.client;

module.exports = {
    check: async () => {
        const db = await mariadbclient.schema.hasTable("products")
        return db
    },
    createTable: async () => {
        const newDb = await mariadbclient.schema.createTable("products", (table) => {
            table.increments('id')
            table.string('name')
            table.integer('price')
            table.string('imageUrl')
            table.integer('stock')
            table.string('code')
            table.string('description')
          })
        return newDb
    },
    create: async (productToCreate) => {
        const insertedProduct = await mariadbclient.from("products").insert(productToCreate);
        return insertedProduct;
    },
    getAll: async () => {
        const allProducts = await mariadbclient.from("products").select('id', 'name', 'price', 'imageUrl', 'code', 'description', 'stock');
        return allProducts;
    },
    getById: async (selectedId) => {
        const product = await mariadbclient("products").where({ id: selectedId })
        return product;
    },
    editById: async (selectedId, newProduct) => {
        const { name, price, imageUrl, stock, code, description } = newProduct;
        let editedProduct;
        if(name) {
            editedProduct = await mariadbclient("products")
            .where({ id: selectedId })
            .update({ name })    
        }
        if (price) {
            editedProduct = await mariadbclient("products")
            .where({ id: selectedId })
            .update({ price })
        }
        if (imageUrl) {
            editedProduct = await mariadbclient("products")
            .where({ id: selectedId })
            .update({ imageUrl })
        }
        if (stock) {
            editedProduct = await mariadbclient("products")
            .where({ id: selectedId })
            .update({ stock })
        }
        if (code) {
            editedProduct = await mariadbclient("products")
            .where({ id: selectedId })
            .update({ code })
        }
        if (description) {
            editedProduct = await mariadbclient("products")
            .where({ id: selectedId })
            .update({ description })
        }
        return editedProduct
    },
    deleteById: async (idToDelete) => {
        const deletedProduct = await mariadbclient("products")
        .where({ id: +idToDelete })
        .del()
        return deletedProduct
    },
    deleteAll: async () => {
        const truncatedTable = await mariadbclient("products").truncate();
        return truncatedTable;
    }
}