import { Component } from '@angular/core';
import { experiences } from '../data-experience';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [...experiences];



}
