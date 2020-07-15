import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits-cards',
  templateUrl: './benefits-cards.component.html',
  styleUrls: ['./benefits-cards.component.css']
})
export class BenefitsCardsComponent implements OnInit {

  benefitsItem = [
    {
      "image": "http://techveduat.com/Internal-Project/code/images/whistle.png",
      "head": "STATES OF EQUIPMENTS",
      "para": "Modern conveniences &amp; functional spaces to help you gain more from workout"
    },
    {
      "image": "http://techveduat.com/Internal-Project/code/images/dumbell.png",
      "head": "USE PER PAY",
      "para": "Pay only for the number of hours you workout in gym"
    },
    {
      "image": "http://techveduat.com/Internal-Project/code/images/pay-per-use.png",
      "head": "CERTIFIED EXPERTS",
      "para": "Certified experts and trainers to help you acheive your fitness goals"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
