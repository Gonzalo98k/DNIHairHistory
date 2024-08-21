
import { startServer } from "./server.js"
import { db } from "./mongoDB/mongoConnection.js"
(async()=>{
   await startServer()
   await db()
})()

