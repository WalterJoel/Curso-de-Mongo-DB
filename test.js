//Para este ejemplo se ha creado la BD Zapatillas

db.createCollection('tallas');
db.createCollection('colores');
//Insertando datos

db.Modelos.insert(
{
    nombre_modelo: 'Vans Juvenil',
    precio_modelo: 15
})

//Mostrando todos los datos de una coleccion de forma organizada

db.Modelos.find().pretty()

//Insertando mas de una vez
db.Modelos.insert([
{nombre_modelo:'tap', precio_modelo:15 },
{nombre_modelo:'star', precio_modelo:15 },
{nombre_modelo:'mocasin', precio_modelo:15 }
])

//Buscando por un nombre de modelo en especifico
db.Modelos.find({nombre_modelo:'Vans Juvenil'})

//Actualizando a partir de encontrar un nombre_modelo en especifico
db.Modelos.update(
                  {nombre_modelo:'Vans Juvenil'},
                  {
                    nombre_modelo:'Vans Juvenil',
                    precio_modelo:123
                  }
                );  
//Mostrando             
db.Modelos.find().pretty()

//Agregando un nuevo campo a la coleccion(tabla en sql) modelos

db.Modelos.update(
    {nombre_modelo:'Vans Juveniles'},
    {
      $set:{nuevo_campo:'Un nuevo valor'}
    }
  );  
db.Modelos.update(
    {nombre_modelo:'Vans Juveniles'},
    {
      $set:{valor_mumerico:5}
    }
  );  
db.Modelos.find().pretty()
//Incremento en 5 un valor numerico
db.Modelos.update(
    {nombre_modelo:'Vans Juveniles'},
    {
      $inc:{valor_mumerico:5}
    }
  );  
db.Modelos.find().pretty()
// Lo contrario de set, elimino un campo de la coleccion 
db.Modelos.update(
    {nombre_modelo:'Vans Juveniles'},
    {
      $unset:{valor_mumerico:true}
    }
  );  
db.Modelos.find().pretty()
//Funcion upsert -- sino existe al actualizar, entonces lo crea autimaticamente

db.Modelos.update(
    {nombre_modelo:'star'},
    {   
      nombre_modelo:'si solo escribo un campo nuevo el upsert elimina todos los otros campos',
      precio_modelo:'y se queda solo con el upsert',
      nuevo_campo  :'no existo y me creo por el upsert'
    },
    {upsert: true}
  )
db.Modelos.find().pretty()
//Ordenar de forma ascendente
db.Modelos.find().sort({nombre_modelo:1});
//Ordenar de forma descendente
db.Modelos.find().sort({nombre_modelo:-1});
//Elegir cuantos retorna ordenando por un campo
db.Modelos.find().limit(4).sort({nombre_modelo:1});
//Aplicando un foreach de javascript
db.Modelos.find().forEach(function(e){
    print("nombre del modelo: " + e.nombre_modelo);
});