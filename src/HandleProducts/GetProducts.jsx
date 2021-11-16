const productos = [
    {
        "id":1,
        "image":"https://www.intel.la/content/dam/www/global/badges/11th-core-i9-processor-badge-1080x1080.png.rendition.intel.web.64.64.png",
        "Brand":"Intel",
        "Model": "i9-12900KF",
        "Specs":"16 nucleos 5.20GHZ",
        "Type":"procesador",
        "price": "$574.00",
        "stock": "3"
    },
    {
        "id":2,
        "image":"https://www.intel.la/content/dam/www/global/badges/11th-gen-core-i7-processors-badge-rwd.png.rendition.intel.web.64.64.png",
        "Brand":"Intel",
        "Model": "i7-12700KF",
        "Specs":"12 nucleos 5.00GHZ",
        "type":"procesador",
        "price": "$394.00",
        "stock": "12"
    },
    {
        "id":3,
        "image":"https://media.kingston.com/kingston/features/ktc-features-memory-beast-ddr5.jpg",
        "Brand":"Kingston",
        "Model": "Fury Beast DDR5",
        "Specs":"16GB 5200MHz",
        "Type":"RAM",
        "price": "$143.00",
        "stock": "5"
    },
    {
        "id":4,
        "image":"https://media.kingston.com/kingston/product/ktc-product-memory-impact-ddr4-dual-1-tn.png",
        "Brand":"Kingston",
        "Model": "Fury impact DDR4",
        "Specs":"16GB 2666MHz",
        "Type":"RAM",
        "price": "$120.00",
        "stock": "5"
    },
    {
        "id":5,
        "image":"https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-120gb-1-sm.jpg",
        "Brand":"Kingston",
        "Model": "A400",
        "Specs":"480 GB",
        "Type":"SSD",
        "price": "$47,02",
        "stock": "30"
    }
]



const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(
           productos
        )
    }, 2000)
})

export default getProducts;