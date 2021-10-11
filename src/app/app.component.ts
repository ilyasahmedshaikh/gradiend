import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'gradiend';
  searchState: boolean = false;

  onSearchToggle() {
    this.searchState = !this.searchState;
  }

  getSearchState(event: any) {
    this.onSearchToggle();
  }

}
