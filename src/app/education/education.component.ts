import { Component } from '@angular/core';
import { educations } from '../data-education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [...educations];

}
