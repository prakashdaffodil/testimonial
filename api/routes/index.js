const express = require("express");
const router = express.Router();
const testimonialContoller= require('../controllers')

router.get("/:id?",testimonialContoller.getTestimonial);
router.post("/", testimonialContoller.fileupload.single('image'),testimonialContoller.createTestimonial);
router.put("/:id?",testimonialContoller.deleteTestinomial);
router.patch("/:id?",testimonialContoller.fileupload.single('image'),testimonialContoller.updatedTestnomial);

module.exports = router;
