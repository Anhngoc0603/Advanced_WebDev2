import { Component } from '@angular/core';
import { BookAPIService } from '../../myservices/book-apiservice';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPIService){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data; console.log('Books:', data);},
      error:(err)=>{this.errMessage=err.message; console.error('Error:', err);}
    })
  }
}
