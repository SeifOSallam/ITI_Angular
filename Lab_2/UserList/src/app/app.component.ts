import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { UsercardsComponent } from './usercards/usercards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,SearchbarComponent, UsercardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UserList';
}
