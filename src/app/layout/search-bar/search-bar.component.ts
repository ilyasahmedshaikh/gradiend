import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchState = new EventEmitter<boolean>();
  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        img: 'assets/img/img1.jpg',
        name: 'Depression',
      },
      {
        id: 2,
        img: 'assets/img/img2.jpg',
        name: 'Childhood Trauma',
      },
      {
        id: 3,
        img: 'assets/img/img2.jpg',
        name: 'Anger Management',
      },
      {
        id: 4,
        img: 'assets/img/img1.jpg',
        name: 'Suicidal Help',
      },
      {
        id: 5,
        img: 'assets/img/img1.jpg',
        name: 'Addiction Recover',
      },
      {
        id: 6,
        img: 'assets/img/img2.jpg',
        name: 'Mental Disorders',
      },
      {
        id: 7,
        img: 'assets/img/img2.jpg',
        name: 'Anger Management',
      },
      {
        id: 8,
        img: 'assets/img/img1.jpg',
        name: 'Suicidal Help',
      },
      {
        id: 9,
        img: 'assets/img/img1.jpg',
        name: 'Addiction Recover',
      },
      {
        id: 10,
        img: 'assets/img/img2.jpg',
        name: 'Mental Disorders',
      }
    ]
  }

  onSearchClick() {
    this.searchState.emit();
  }

}
