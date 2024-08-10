import user from '../models/User.js'
export const createuser=async(req,res)=>{
    const newuser=new user(req.body)
    try{
        const saveduser=await newuser.save();
          res.status(200).json({success:true,message:'Successfully created',data:saveduser})
    }
    catch(err){
        res.status(500).json({success:false,message:'Failed to create .Try again'});
    }
}
export const updateuser=async(req,res)=>{
    const id=req.params.id
    try{
         const updateduser=await user.findByIdAndUpdate(id,{
              $set:req.body
         },{new:true}

         )
         res.status(200).json({success:true,message:'Successfully updated',data:updateduser})
    }
    
    catch(err){
        res.status(500).json({success:false,message:'failed to update'})
    }
    
}
export const deleteuser=async(req,res)=>{
    const id=req.params.id
    try{
         const deletededuser=await user.findByIdAndDelete(id);
         
         res.status(200).json({success:true,message:'Successfully deleted'})
    }
    
    catch(err){
        res.status(500).json({success:false,message:'failed to delete'})
    }
}
export const getSingleuser=async(req,res)=>{
    const id=req.params.id
    try{
         const user=await user.findById(id);
         
         res.status(200).json({success:true,message:'Successfully fetched',data:user})
    }
    
    catch(err){
        res.status(404).json({success:false,message:'not found'})
    }
}
export const getAlluser=async(req,res)=>{
    //const page=parseInt(req.query.page);
    try{
        const users=await user.find({})
        res.status(200).json({success:true,message:'Successful',data:user})
    }
    catch(err){
        res.status(404).json({success:false,message:'not found'})
    }
};
