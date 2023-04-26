import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { User } from '../interfaces/user.intreface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  users: User[] = [];

  newUserName: string = '';
  newUserJob: string = '';

  isAddingUser = false;

  constructor(
    private userService: UserService,
    private notificationService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.getListOfUsers();
  }

  getListOfUsers() {
    this.userService.getListOfUsers().subscribe({
      next: (res) => {
        this.users = res.data;
      },
      error: (err) => {
        this.users = [];
        this.notificationService.error('Error', 'Something went wrong');
      },
    });
  }

  addNewUser() {
    this.isAddingUser = true;
    this.userService
      .createNewUser(this.newUserName, this.newUserJob)
      .subscribe({
        next: (res) => {
          this.isAddingUser = false;
          this.notificationService.success('Success', 'Added new user');
          this.getListOfUsers();
        },
        error: (err) => {
          this.isAddingUser = false;
          this.notificationService.error('Error', 'Something went wrong');
        },
      });
  }
}
