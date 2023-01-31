import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  listOfPackages = [
    {
      id: 1,
      name: "Entry Level",
      description: "For Young Graduators And Freshers",
      services: ["Review & Critique","Editable & PDF File","ATS Report with 80%+ score","Keyword-rich to match job postings","Choose From 20+ Layouts", "2 Revisions Within 15 days"],
      price: 5000,
      AddOns: [{
        id: 1,
        name: "Cover Letter",
        price: 1500
      },
      {
        id: 2,
        name: "Linkedin",
        price: 3500
      }
      ]
    },
    {
      id: 2,
      name: "Mid Level",
      description: "For Professionals With 3-15 Years Of Experience",
      services: ["Review & Critique","Editable & PDF File","ATS Report with 80%+ score","Keyword-rich to match job postings","Choose From 20+ Layouts", "4 Revisions Within 15 days"],
      price: 8000,
      AddOns: [{
        id: 1,
        name: "Cover Letter",
        price: 2000
      },
      {
        id: 2,
        name: "Linkedin",
        price: 4000
      },
      {
        id: 3,
        name: "Biography",
        price: 4000 
      }
      ]
    },
    {
      id: 3,
      name: "Executive Level",
      description: "For Executive Professionals With 15+ Years Of Experience",
      services: ["Review & Critique","Editable & PDF File","ATS Report with 80%+ score","Keyword-rich to match job postings","Choose From 20+ Layouts", "6 Revisions Within 15 days"],
      price: 12000,
      AddOns: [{
        id: 1,
        name: "Cover Letter",
        price: 2500
      },
      {
        id: 2,
        name: "Linkedin",
        price: 5000
      },
      {
        id: 3,
        name: "Executive Biography",
        price: 5000 
      }
      ]
    }
  ]
  
  Account_detail = {
    EasyPaisa: "Easy123",
    JazzCash: "Jazz123",
    HBL: "HBL123",
    Alfalah: "Alfalah123"
  }
  constructor() { }
}
