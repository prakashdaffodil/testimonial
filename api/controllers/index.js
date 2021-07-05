const mongoose = require("mongoose");
const Testimonial = require("../models");
const fileupload = require('./fileupload')
const getTestimonial = async (req, res, next) => {
  try{
  const {id} =req.params;
  if(id){
    const result=await Testimonial.find({active:1, _id: id});
    res.status(200).json({result,success:true});
  }
  else{
  const result=await Testimonial.find({active:1});
  if (result.length >= 0) {
    res.status(200).json({result:result,success:true});
      } else {
          res.status(404).json({
              success: false,
              result:[],
              message: 'No entries found'
          });
      }
}
  }
catch(err) {
  console.log(err);
  res.status(500).json({
    success: false,
    result:[],
    message: "Internal Server Error",
    error: err
  });
}
};

const createTestimonial= async(req, res, next) => {
  try{
  const testimonial = new Testimonial({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    postBy: req.body.postBy,
    testimonialDesc: req.body.testimonialDesc,
    image: req.file.path,
  });
  const result = await testimonial.save();
  res.status(201).json({
        message: "testimonial created successfully",
        success:true
      });
}
 catch(err){
      console.log(err);
      res.status(500).json({
        message: "Internal Server Error",
        success:false,
        error: err
      });
  }
}

const deleteTestinomial= async(req, res, next) => {
  try{
    const {id} =req.params;
    if(id){
      const result= await Testimonial.updateOne({_id:id},{active:0,lastUpdatedOn:new Date()});
      if(result){
        res.status(200).json({success:true,
          msg:'deleted Successfully'});
      }
      else{
        res.status(404).json({
          message: 'Record has not updated',
          success: false
      });
      }
    }
    else{
      res.status(404).json({
        message: 'Entires not found',
        success: false
    });
    }
  }
catch(err){
  console.log(err);
  res.status(500).json({
    error: err
  });

}
}

const updatedTestnomial= async(req,res,next) =>{
  try{
  const {id}= req.params;
  if(id){
  const updateOps = {};
 const body=  JSON.parse(JSON.stringify(req.body))
  for (ops in body) {
    updateOps[ops] = body[ops]
  }
  if(req.file){
    updateOps['image'] = req.file.path;
  }
  const result= await Testimonial.update({ _id: id}, { $set: updateOps });
      res.status(200).json({
          message: 'Testimonial updated',
          success: true
    });
  }
  else{
    res.status(401).json({
      message: 'No entries found',
      success: false
      })
  }
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
      success:false,
      error: err
    });

  }
}

module.exports = { getTestimonial,createTestimonial,fileupload,deleteTestinomial,updatedTestnomial};
