# testimonial


method: GET All testimonials
http://localhost:8081/testimonial

output :
[{"active":1,"_id":"60e2088c7436bd83ef96f254","name":"Prakash Mishra","postBy":"Developer","testimonialDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","image":"testimonial/uploads/2021-07-04T19:14:20.056Zimg6.jpg","createdOn":"2021-07-04T19:14:20.062Z","lastUpdatedOn":"2021-07-04T19:14:20.062Z","__v":0},{"active":1,"_id":"60e209eff49aa5845b952c50","name":"Prakash Mishra","postBy":"Developer","testimonialDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","image":"uploads/2021-07-04T19:20:15.449Zimg6.jpg","createdOn":"2021-07-04T19:20:15.452Z","lastUpdatedOn":"2021-07-04T19:20:15.452Z","__v":0},{"active":1,"_id":"60e209f5f49aa5845b952c52","name":"Prakash Mishra","postBy":"Developer","testimonialDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","image":"uploads/2021-07-04T19:20:21.477Zimg6.jpg","createdOn":"2021-07-04T19:20:21.478Z","lastUpdatedOn":"2021-07-04T19:20:21.478Z","__v":0},{"active":1,"_id":"60e26b1cf49aa5845b9556eb","name":"Prakash Mishra","postBy":"Developer","testimonialDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","image":"uploads/2021-07-05T02:14:52.139Zimg6.jpg","createdOn":"2021-07-05T02:14:52.143Z","lastUpdatedOn":"2021-07-05T02:14:52.143Z","__v":0}]



method: GET testimonials by id
http://localhost:8081/testimonial/60e2088c7436bd83ef96f254

output:
[{"active":1,"_id":"60e2088c7436bd83ef96f254","name":"Prakash Mishra","postBy":"Developer","testimonialDesc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,","image":"testimonial/uploads/2021-07-04T19:14:20.056Zimg6.jpg","createdOn":"2021-07-04T19:14:20.062Z","lastUpdatedOn":"2021-07-04T19:14:20.062Z","__v":0}]

Create testimonial
method: POST
http://localhost:8081/testimonial
payload: formdata
  name   'prakash'
  postBy 'CEO'
  testimonialDesc  'loerm ....'
  image         file type



Delete testimonial
method: put
http://localhost:8081/testimonial/60e2088c7436bd83ef96f254



update testimonial
method: patch
http://localhost:8081/testimonial/60e2088c7436bd83ef96f254

payload: formdata
  name   'prakash'
  postBy 'CEO'
  testimonialDesc  'loerm ....'
  image         file type

