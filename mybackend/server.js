const express=require('express');
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv');
const pdf = require('html-pdf');
const pdfTemplate=require('./Documents/temp');

const routeurls=require('./routes/route')
const cors=require('cors');
const { response } = require('express');

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log('Database connected'))

app.use(express.json())
app.use(cors())
app.use('/app',routeurls)

// app.post("/create-pdf", (req, res) => {
//     pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
//       if (err) {
//         res.send(Promise.reject());
//       }
//       res.send(Promise.resolve());
//     });
//   });
  
  //Get - send the generated pdf to the client
  app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
  });

app.listen(8020,()=>console.log("server is up and running"))

