import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  student_id: string = "SV123"
  student_name: string = "Nguyen Van A"
  student_class: string = "K234112E"
  my_uni_logo = 'assets/img/my_uni_logo.png';
  my_new_logo = 'assets/img/logo.webp';
}
