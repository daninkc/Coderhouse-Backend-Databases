const { db_sqlite } = require("../../../services/Sqlite3ClientService");
const sqliteclient = db_sqlite.client;

module.exports = {
    check: async () => {
        const db = await sqliteclient.schema.hasTable("products")
        return db
    },
    createTable: async () => {
        const newDb = await sqliteclient.schema.createTable("products", (table) => {
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
        const insertedProduct = await sqliteclient.from("products").insert(productToCreate);
        return insertedProduct;
    },
    getAll: async () => {
        const allProducts = await sqliteclient.from("products").select('id', 'name', 'price', 'imageUrl', 'code', 'description', 'stock');
        return allProducts;
    },
    getById: async (selectedId) => {
        const product = await sqliteclient("products").where({ id: selectedId })
        return product;
    },
    editById: async (selectedId, newProduct) => {
        const { name, price, imageUrl, stock, code, description } = newProduct;
        let editedProduct;
        if(name) {
            editedProduct = await sqliteclient("products")
            .where({ id: selectedId })
            .update({ name })    
        }
        if (price) {
            editedProduct = await sqliteclient("products")
            .where({ id: selectedId })
            .update({ price })
        }
        if (imageUrl) {
            editedProduct = await sqliteclient("products")
            .where({ id: selectedId })
            .update({ imageUrl })
        }
        if (stock) {
            editedProduct = await sqliteclient("products")
            .where({ id: selectedId })
            .update({ stock })
        }
        if (code) {
            editedProduct = await sqliteclient("products")
            .where({ id: selectedId })
            .update({ code })
        }
        if (description) {
            editedProduct = await sqliteclient("products")
            .where({ id: selectedId })
            .update({ description })
        }
        return editedProduct
    },
    deleteById: async (idToDelete) => {
        const deletedProduct = await sqliteclient("products")
        .where({ id: +idToDelete })
        .del()
        return deletedProduct
    },
    deleteAll: async () => {
        const truncatedTable = await sqliteclient("products").truncate();
        return truncatedTable;
    }
}