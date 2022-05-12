import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
const book1:Book =
  {
    id:1,title:"Accidental PrimeMinister",
    author:'Sanjay Baru',price:750
    
  } 
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   book :Book = book1;
   @Input()
   bookId : number;
   @Input()
   selBook:Book
   @Input()
   pChild:number
  constructor() {   }

  ngOnInit() {
  }

}
