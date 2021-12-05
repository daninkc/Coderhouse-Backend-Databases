require("@google-cloud/firestore")
const { db } = require("../../../services/FirebaseClientService")

module.exports = {
    create: async (productToCreate) => {
        try {
            const products = await db.collection('products')
            const createdProduct = await products.add(productToCreate)
            return createdProduct.id
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async () => {
        try {
            const products = db.collection('products');
            const snapshot = await products.get();
            let allProducts = []
            snapshot.forEach(doc => {
                allProducts.push(doc.data());
            });
            return allProducts;
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (id) => {
        try {
            const products = await db.collection('products').doc(id);
            const doc = await products.get();
            if (!doc.exists) {
                return "Document not found"
            } else {
                return doc.data();
            }
        } catch (error) {
            console.log(error)
        }
    },
    editById: async (selectedId, newProduct) => {
        const { 
            name: newname,
            price: newPrice,
            imageUrl: newImageUrl,
            stock: newStock,
            description: newDescription,
            code: newCode 
        } = newProduct;
        let product = await db.collection('products').doc(selectedId);
        if (newname) {
            await product.update({ name: newname })
        }
        if (newPrice) {
            await product.update({ price: newPrice })
        }
        if (newImageUrl) {
            await product.update({ imageUrl: newImageUrl })
        }
        if (newStock) {
            await product.update({ stock: newStock })
        }
        if (newDescription) {
            await product.update({ description: newDescription })
        }
        if (newCode) {
            await product.update({ code: newCode })
        }
        const editedProduct = await product.get();
        if (!editedProduct.exists) {
            return "Document not found"
        } else {
            product = editedProduct.data();
        }
        return product;
    },
    deleteById: async (idToDelete) => {
        try {
            const deletedProducts = await db.collection('products').doc(idToDelete).delete();
            return deletedProducts;
        } catch (error) {
            console.log(error)
        }
    },
    deleteAll: async () => {
        try {
            async function deleteCollection(db, collectionPath, batchSize) {
                const collectionRef = db.collection(collectionPath);
                const query = collectionRef.orderBy('__name__').limit(batchSize);

                return new Promise((resolve, reject) => {
                    deleteQueryBatch(db, query, resolve).catch(reject);
                });
            }

            async function deleteQueryBatch(db, query, resolve) {
                const snapshot = await query.get();

                const batchSize = snapshot.size;
                if (batchSize === 0) {
                    resolve();
                    return;
                }

                const batch = db.batch();
                snapshot.docs.forEach((doc) => {
                    batch.delete(doc.ref);
                });
                await batch.commit();

                process.nextTick(() => {
                    deleteQueryBatch(db, query, resolve);
                });
            }
            const products = await db.collection('products');
            const snapshot = await products.get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            const batchSize = []
            snapshot.forEach(doc => {
                batchSize.push(doc.id)
            });
            const deletionResult = deleteCollection(db, 'products', batchSize.length)
            return deletionResult;
        } catch (error) {
            console.log(error)
        }
    }
}