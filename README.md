## Bitcoin_Price

**Este proyecto consta de un backend bien definido y un frontend simple para poder interactuar**

**Debes tener instalado nodeJS para poder correr este proyecto**

***Instalacion:***

Una vez clonado el repositorio deberas ejecutar el comando npm install dentro de la carpeta microservice para instalar todas las dependencias del backend.
Tambien deberas ejecutar el comando npm install en la carpeta "client" para instalar todas las dependencias del frontend.


***Ejecución:***

-Para poder correr el proyecto deberas ejecutar el comando npm start en backend (la carpeta microservices).

*Una vez hecho esto podrias comunicarte con las rutas del backend, pero para hacerlo un poco mas interactivo te recomiendo que:*
-Ejecutes el comando npm start en frontend (la carpeta client)


***Descripcion***

**Para este proyecto elegi el lenguaje de programacion JavaScript.**

**Backend**

-El backend esta hecho en NodeJS, utilizando la libreria express para correr el servidor.
-El microservicio que registra cada 60 segundos el precio del bitcoin fue realizado con la libreria node-cron
-Por comodidad utilize axios como para las consultas asincronas
-Elegi guardar el historial de precios en un archivo JSON (aunque al principio me inclinaba por utilizar una base de datos SQL, al ver que los datos iban a estar almacenados en una sola tabla, sin otras entidades con las cuales poder relacionarse, opte por una solucion un poco mas simple) el cual estara precargado con datos para agilizar las pruebas.
-El server se encuentra corriendo en http://localhost:8080 pero se puede cambiar el puerto modificando la variable PORT de entorno en el archivo .env, *por ejemplo PORT=3001*
-El microservicio cuenta con 3 endpoint:
a)http://localhost:8080/bitcoin/price?year={YEAR}&mouth={MOUTH}&day={DAY}&hour={HOUR}&min={MIN} 
 > Retorna el precio el bitcoin en un momento determinado, los segundos siempre estan en "00"
 > para enviar los parametros al backend utilice QueryParams
 > 
 > Me tome la libertad de setear los momentos en el formato YYY:MM:DD_HH:MM:SS porque creo es la una forma univoca de reconocer un instante en el tiempo.
 > 
 > Si esta corriendo el servicio puede esperar un minuto y probar ingresando su fecha actual.
 
b) http://localhost:8080/bitcoin/ 
 > Retorna el precio actual del bitcoin
 
c)http://localhost:8080/bitcoin/record 
 > Retorna el historial de precios registrado (el archivo JSON)
 
 
**Frontend**

-El frontend fue desarrollado en React
-Para agilizar los estilos utilice la libreria Boostrap
-El frontend se encuentra corriendo en http://localhost:3000


***Como Comenzar***

-Ejecute el comando npm start en backend y frontend (debe tener dos consolas corriendo)

-Luego se abrira en su navegador por defecto la aplicacion frontend

-Puede hacer click en el boton "Give me the current price" para obtener el precio actual

-Si hace click en el boton "Get Price" la app le dara el precio correspondiente a la fecha que setee arriba. En el caso de que el programa no tenga registros en esa fecha se le notificara con un status 404

-Finalmente puede hacer click en el boton "Give me the record" para obtener todos los registros, estos ultimos no estan estilizados por cuestiones de falta de tiempo.



