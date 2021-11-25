const productos = [
    {
        "Id":1,
        "Image":"https://www.intel.la/content/dam/www/global/badges/11th-core-i9-processor-badge-1080x1080.png.rendition.intel.web.64.64.png",
        "Brand":"Intel",
        "Model": "i9-12900KF",
        "Specs":"16 nucleos 5.20GHZ",
        "Descrip":" Cantidad de núcleos   16  Cantidad de subprocesos 24   Frecuencia turbo máxima    5,20 GHz   Frecuencia de la Tecnología Intel® Turbo Boost Max 3.0 5,20 GHz",
        "Type":"procesador",
        "Price": "$574.00",
        "Stock": "3"
    },
    {
        "Id":2,
        "Image":"https://www.intel.la/content/dam/www/global/badges/11th-gen-core-i7-processors-badge-rwd.png.rendition.intel.web.64.64.png",
        "Brand":"Intel",
        "Model": "i7-12700KF",
        "Specs":"12 nucleos 5.00GHZ",
        "Descrip":"Núcleos totales: 12 N° de núcleos de rendimiento: 8 N° de núcleos eficientes: 4 Total de subprocesos: 20 Frecuencia turbo máxima: 5,00 GHz Frecuencia de la tecnología Intel Turbo Boost Max 3.0: 5,00 GHz Frecuencia turbo máxima de núcleo de rendimiento: 4,90 GHz",
        "Type":"procesador",
        "Price": "$394.00",
        "Stock": "12"
    },
    {
        "Id":3,
        "Image":"https://media.kingston.com/kingston/features/ktc-features-memory-beast-ddr5.jpg",
        "Brand":"Kingston",
        "Model": "Fury Beast DDR5",
        "Specs":"16GB 5200MHz",
        "Descrip":"La reinvención de las memorias Fury, las más famosas del segmento, viene de la mano de Kingston y ahora con el nombre Fury Beast. La mayor compatibilidad, versatilidad y velocidad en RAM.",
        "Type":"ram",
        "Price": "$143.00",
        "Stock": "5"
    },
    {
        "Id":4,
        "Image":"https://media.kingston.com/kingston/product/ktc-product-memory-impact-ddr4-dual-1-tn.png",
        "Brand":"Kingston",
        "Model": "Fury impact DDR4",
        "Specs":"16GB 2666MHz",
        "Descrip":"-Formato: DDR4 / UDIMM 288 Pines -Capacidad: 8 GB (1x8GB) -Velocidad: 2666 Mhz -Latencia: CL16 -Voltage: 1.2 V ",
        "Type":"ram",
        "Price": "$120.00",

        "Stock": "5"
    },
    {
        "Id":5,
        "Image":"https://s.cdnshm.com/catalog/mx/t/95444402/unIdad-de-estado-solIdo-ssd-240gb-kingston-a400-sata-2-5.jpg",
        "Brand":"Kingston",
        "Model": "A400",
        "Specs":"480 GB",
        "Descrip":"Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional. Al estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas. ",
        "Type":"almacenamiento",
        "Price": "$47,02",
        "Stock": "30"
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