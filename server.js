const express =require('express');
const DBConnect = require('./config/DBConnect.js');
const dotenv =require('dotenv').config();

DBConnect();
const app = express();
const PORT = process.env.PORT || 5000;
  
app.use(express.json());
app.use("/api/contacts", require("./Routes/contact.route.js"));
app.use("/api/user", require("./Routes/user.route.js"));

app.listen(PORT, ()=>{
  console.log(`server listening on port ${PORT}`);
})
