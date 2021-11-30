const productos = [
    {
        "Id":1,
        "Image":"https://www.neotek.pe/media/product_image/1_doRI5l4.png",
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
        "Image":"https://cdn-reichelt.de/bilder/web/xxl_ws/E200/BX8070110700K_03.png",
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
    },
    {
        "Id":6,
        "Image":"https://www.amd.com/system/files/2019-06/238593-ryzen-7-pib-left-facing-1260x709.png",
        "Brand":"AMD",
        "Model": "Ryzen 7",
        "Specs":"5800X",
        "Descrip":"AMD el procesador de 8 núcleos más rápido para el escritorio principal, con 16 hilos de procesamiento. OS Support-Windows 10 64-Bit Edition. ",
        "Type":"procesador",
        "Price": "$340.97",
        "Stock": "22"
    },
    {
        "Id":7,
        "Image":"https://www.amd.com/system/files/2019-11/238593-ryzen-9-pib-left-facing-1260x709_0.png",
        "Brand":"AMD",
        "Model": "Ryzen 9",
        "Specs":"5900X",
        "Descrip":"El mejor procesador de escritorio para juegos del mundo, con 12 núcleos y 24 hilos de procesamiento Puede ofrecer un rendimiento de élite de 100 Plus FPS en los juegos más populares del mundo. ",
        "Type":"procesador",
        "Price": "$484.00",
        "Stock": "12"
    },
    {
        "Id":8,
        "Image":"https://images.samsung.com/is/image/samsung/es-ssd-970-evo-mz-v7e500bw-frontblack-96266727?$720_576_PNG$",
        "Brand":"Samsung",
        "Model": "970 EVO",
        "Specs":"Plus Series - PCIe NVMe",
        "Descrip":"Especialmente diseñado para entusiastas de la tecnología, jugadores incondicionales y profesionales que necesitan un rendimiento incomparable y una fiabilidad superior. ",
        "Type":"almacenamiento",
        "Price": "$54.99",
        "Stock": "8"
    },
    {
        "Id":9,
        "Image":"https://pasionporlatecnologia.com/productos/WD40EZRZ.png",
        "Brand":"Western Digital",
        "Model": "WD40EZAZ 4tb",
        "Specs":"5400 RPM, SATA 6 Gb/s, caché de 256 MB, 3,5",
        "Descrip":"Western Digital es una marca de renombre mundial en almacenamiento de datos con la cual podés crear, experimentar y guardar contenidos a través de una amplia gama de dispositivos. La alta seguridad y rendimiento que brindan sus unidades la convierten en una de las empresas más elegidas del mercado.. ",
        "Type":"almacenamiento",
        "Price": "$69.99",
        "Stock": "17"
    },
    {
        "Id":10,
        "Image":"https://s.cdnshm.com/catalog/mx/t/95444402/unIdad-de-estado-solIdo-ssd-240gb-kingston-a400-sata-2-5.jpg",
        "Brand":"Kingston",
        "Model": "SA400S37",
        "Specs":"960GB",
        "Descrip":"Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional. Al estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas. En su version de alta capacidad ",
        "Type":"almacenamiento",
        "Price": "$84.99",
        "Stock": "29"
    },
    {
        "Id":11,
        "Image":"https://www.corsair.com/medias/sys_master/images/images/h90/h98/9678466482206/CMH32GX4M2E3200C16/Gallery/VENGEANCE_RGB_PRO_SL_BLACK_01/-CMH32GX4M2E3200C16-Gallery-VENGEANCE-RGB-PRO-SL-BLACK-01.png_515Wx515H",
        "Brand":"Corsair",
        "Model": "Vengeance",
        "Specs":"RGB Pro 16GB",
        "Descrip":"La memoria DDR4 de alto rendimiento ilumina tu sistema con una iluminación viva y animada de diez LED RGB ultra brillantes y direccionables individualmente por módulo. ",
        "Type":"ram",
        "Price": "$42.99",
        "Stock": "5"
    },
    {
        "Id":12,
        "Image":"https://axa.com.ar/webaxa/15894-medium_default/memoria-ram-crucial-ddr4-8gb-2666-mhz.jpg",
        "Brand":"Crucial",
        "Model": "CT8G4DFRA266 ",
        "Specs":"DDR4 8gb",
        "Descrip":"Garantía de compatibilidad cuando se utiliza el escáner del sistema Crucial o la herramienta de asesoramiento crucial  La calidad y fiabilidad de Micron están respaldados por pruebas de nivel superior de componentes y módulos y 42 años de experiencia en memoria ",
        "Type":"ram",
        "Price": "$28.99",
        "Stock": "15"
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