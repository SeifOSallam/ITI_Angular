import { Component } from '@angular/core';
import Users from '../../assets/users.json'

@Component({
  selector: 'app-usercards',
  standalone: true,
  imports: [],
  templateUrl: './usercards.component.html',
  styleUrl: './usercards.component.css'
})
export class UsercardsComponent {
  users: any[] = Users;
  
}
