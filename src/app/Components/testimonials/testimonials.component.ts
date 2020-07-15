import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  SliderItem = [
   {
     "image": "http://techveduat.com/Internal-Project/code/images/aboutus.jpg",
     "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      "name": "Rohit Chattopadhyay",
      "fb": "http://techveduat.com/Internal-Project/code/images/facebook-small.png",
      "twitter": "http://techveduat.com/Internal-Project/code/images/twitter-small.png"
    }, 
    {
      "image": "http://techveduat.com/Internal-Project/code/images/aboutus.jpg",
      "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
       "name": "Rohit Chattopadhyay",
       "fb": "http://techveduat.com/Internal-Project/code/images/facebook-small.png",
       "twitter": "http://techveduat.com/Internal-Project/code/images/twitter-small.png"
     },
     {
      "image": "http://techveduat.com/Internal-Project/code/images/aboutus.jpg",
      "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
       "name": "Rohit Chattopadhyay",
       "fb": "http://techveduat.com/Internal-Project/code/images/facebook-small.png",
       "twitter": "http://techveduat.com/Internal-Project/code/images/twitter-small.png"
     }
 ]

  constructor() { }

  ngOnInit() {
  }

}
