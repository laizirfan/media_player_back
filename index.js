//1)-import json-server library
const jsonServer =require('json-server')

//2create server using create mthod inside json-server library

const mediaPlayerServer = jsonServer.create()

//3) create  path for db.json file - router()

 const router = jsonServer.router('db.json')

//4) create a middleware to convert json to js

const middleware = jsonServer.defaults()

//5) server shoulf use as well as middleware..first middleware for converts

mediaPlayerServer.use(middleware)

mediaPlayerServer.use(router)

//6)set a port to server for backend,,
//process.env - to select port that is available when 4000 is consumed or used
///to choose a free port when clouding we use process.env

const PORT =  4000 || process.env

//7)run server
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server successful at port ${PORT}`);
})