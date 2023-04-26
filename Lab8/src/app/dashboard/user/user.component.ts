import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user.intreface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() userData!: User;

  constructor() {}

  ngOnInit(): void {}
}
