import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookDemo';
  selectedId =0;
  selectedBook :Book;
  p =13;

  showBook(book){
      this.selectedBook = book;
      this.selectedId =book.id;
   }


}
