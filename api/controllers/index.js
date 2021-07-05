const mongoose = require("mongoose");
const Testimonial = require("../models");
const fileupload = require('./fileupload')
const getTestimonial = async (req, res, next) => {
  try{
  const {id} =req.params;
  console.log('id==== ',req.params)
  if(id){
    const result=await Testimonial.find({active:1, _id: id});
    res.status(200).json(result);
  }
  else{
  const result=await Testimonial.find({active:1});
  if (result.length >= 0) {
    res.status(200).json(result);
      } else {
          res.status(404).json({
              message: 'No entries found'
          });
      }
}
  }
catch(err) {
  console.log(err);
  res.status(500).json({
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
        message: "Created testimonial successfully",
        createdTestimonial: {
            name: result.name,
            testimonialDesc: result.testimonialDesc,
            postBy: result.postBy,
            createdOn: result.price,
            updatedOn: result.price,
            _id: result._id,
            image: result.image,
            request: {
                type: 'GET',
                url: "http://localhost:3000/testinomial/" + result._id
            }
        }
      });
}
 catch(err){
      console.log(err);
      res.status(500).json({
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
        res.status(200).json({success:true,msg:'deleted Successfully'});
      }
      else{
        res.status(404).json({
          message: 'No entries found'
      });
      }
    }
    else{
      res.status(404).json({
        message: 'Entires not found'
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
          request: {
              type: 'GET',
              url: 'http://localhost:3000/testimonial/' + id
          }
    });
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      error: err
    });

  }
}

module.exports = { getTestimonial,createTestimonial,fileupload,deleteTestinomial,updatedTestnomial};
