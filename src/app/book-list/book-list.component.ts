import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../book';
import { BOOKLIST } from '../bookservice';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   books:Book[]=BOOKLIST;
   isAuthorized:boolean=false;
   @Output()
   newEvent = new EventEmitter();
   
  constructor() { }

  ngOnInit() {
  }


  showDetails(book){
     this.newEvent.emit(book);
  }

}
