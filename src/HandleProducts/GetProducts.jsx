import { getFirestore, collection, getDocs, query, where, addDoc, setDoc, doc, Doc } from "firebase/firestore";

/*const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(
           productos
        )
    }, 2000)
})*/
const getProducts= (listProductId,listCategoryId)=>{
   var products = [];
    const db = getFirestore();
    const itemsCollection = collection(db,"items");

    if(listCategoryId == undefined && listProductId == undefined) {
        getDocs(itemsCollection).then(snapshot =>{
       
          return((snapshot.docs.map((doc) =>({ id: doc.id, ...doc.data()}))))
          
        })}else{

            if(listCategoryId !== undefined){
                console.log(listCategoryId)
            }
            if(listProductId !== undefined){
                console.log(listProductId)
            }

        }



if(listProductId !== undefined && listCategoryId !== undefined){console.log("there is a problem in getProducs function")} 

return products;
}
export default getProducts;