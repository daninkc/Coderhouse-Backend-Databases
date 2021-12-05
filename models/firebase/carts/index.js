require("@google-cloud/firestore")
const { db } = require("../../../services/FirebaseClientService")

module.exports = {
    create: async (cartToCreate) => {
        try {
            const carts = await db.collection('carts')
            const createdCarts = await carts.doc().set(cartToCreate)
            return createdCarts;
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async () => {
        try {
            const carts = await db.collection('carts');
            const snapshot = await carts.get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            const allCartsData = snapshot.map(doc => {
                return doc.data()
            });
            return allCartsData;
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (id) => {
        try {
            const carts = await db.collection('carts');
            const snapshot = await carts.where('id', '==', id).get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            const cartData = snapshot.map(doc => {
                return doc.data()
            });
            return cartData;
        } catch (error) {
            console.log(error)
        }
    },
    addProducts: async (id, product) => {
        try {
            const carts = await db.collection('carts');
            const snapshot = await carts.where('id', '==', id).get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            let updateData = [];
            let refs;
            snapshot.forEach(doc => {
                updateData = doc.data().products;
                updateData.push(product)
                refs = doc.id;
            });
            const cartRef = db.collection('carts').doc(refs);
            const addProductsMethod = await cartRef.update({
                products: updateData
            })
            return addProductsMethod;
        } catch (error) {
            console.log(error)
        }
    },
    deleteProducts: async (cartId, productId) => {
        try {
            const carts = await db.collection('carts');
            const snapshot = await carts.where('id', '==', cartId).get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            let refs;
            let updateData = []
            snapshot.forEach(doc => {
                updateData = doc.data().products.filter((item) => item.id !== productId)
                refs = doc.id;
            });
            const cartRef = db.collection('carts').doc(refs);
            const deleteProductsMethod = await cartRef.update({
                products: updateData
            })
            return deleteProductsMethod;
        } catch (error) {
            console.log(error)
        }
    },
    deleteById: async (idToDelete) => {
        try {
            const carts = await db.collection('carts');
            const snapshot = await carts.where('id', '==', idToDelete).get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            let refs;
            snapshot.forEach(doc => {
                refs = doc.id;
            });
            const deletedCart = await db.collection('carts').doc(refs).delete();
            return deletedCart;            
        } catch (error) {
            console.log(error)
        }
    },
    deleteAll: async () => {
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
        const carts = await db.collection('carts');
        const snapshot = await carts.get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        const batchSize = []
        snapshot.forEach(doc => {
            batchSize.push(doc.id)
        });
        const result = deleteCollection(db, 'carts', batchSize.length)
        return result;
    }
}