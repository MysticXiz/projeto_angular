import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data.items;
    });
  }
}