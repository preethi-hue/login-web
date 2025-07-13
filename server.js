const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/ex30');
const userSchema=new mongoose.Schema({
    email:String,
    password:String,
});
const user=mongoose.model('user',userSchema);
app.post('/register',async(req,res)=>{
      const{email,password}=req.body;
      const hash=await bcrypt.hash(password,10);
      try{
      
        await user.create({email,password: hash});
        res.json({status:'ok',message:'user Registered successfully'});
      }catch(err){
            console.error('Registration error:', err);
           res.status(500).json({ status: 'error', error: err.message });
}
});
app.post('/login',async(req,res)=>{
    const{ email,password }=req.body;
    const existinguser = await user.findOne({ email });

    if(!existinguser){
         return res.json({ status: 'error', error: 'User not found' });
    }
    const ispasswordvalid= await bcrypt.compare(password,existinguser.password);
    if(ispasswordvalid){
        return res.json({status:'ok',message:'login successfull'});
    }else{
        return res.json({status:'error',error:'Invalid password'});
    }
});
app.listen(5000,() => console.log('server started on port 5000'));