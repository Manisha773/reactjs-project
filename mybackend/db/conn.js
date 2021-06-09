const mongoose=require('mongoose');
const db=process.env.DATABASE_ACCESS;

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`Database connected`);
}).catch((err)=>console.log(`Database connected`));
