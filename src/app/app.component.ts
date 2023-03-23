import { Component } from '@angular/core';
import {Student} from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phamtuyeA3';

  bio: Student = {
    name: 'Tuyet Mai Pham',
    homeCountry: 'Vietnam',
    currentCountry: 'Canada',
    id: 991545166,
    login: 'phamtuye',
    email: 'phamtuye@sheridancollge.ca',
    image: 'assets/images/IMG_2305.jpg',
    homeFlag: 'assets/images/vietnam.webp'
  }
}
