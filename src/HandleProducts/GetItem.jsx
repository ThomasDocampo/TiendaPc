const detail = 
    {
        "Id":1,
        "Image":"https://s.cdnshm.com/catalog/mx/t/95444402/unidad-de-estado-solido-ssd-240gb-kingston-a400-sata-2-5.jpg",
        "Brand":"Kingston",
        "Model": "A400",
        "Descrip":"Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional. Al estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas. ",
        "Price": "$47,02",
        "Stock": "3"
    }
    const GetItem = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(
               detail
            )
        }, 0)
    })
    
    export default GetItem;