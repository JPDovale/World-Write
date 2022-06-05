import app from "./app.js";
import 'dotenv/config'

const Port = process.env.PORT

app.listen(Port, ()=>{console.log(`server running in the port ${Port}`)}) 