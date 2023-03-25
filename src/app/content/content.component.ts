import { Component, Input } from '@angular/core';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() student!: Student;

  option = "name";
  cost = 0;
  currencyCodeCurrentCountry = "CAD";
  currencyCodeHomeCountry = "VND";
  conversionRate = 17042.78;

}
