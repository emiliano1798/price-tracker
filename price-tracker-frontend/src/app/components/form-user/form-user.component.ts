import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showStep() {
    this.show = !this.show;
  }
}
