import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { ManageService } from '../services/manage.service';
import { select, Store } from '@ngrx/store';
import { ClearStoreAction, EditTicketAction, LoadUsersAction } from '../actions/manage.actions';
import { User } from '../models/user';
import * as fromUser from '../reducers/index';
import { MatTableDataSource } from '@angular/material';
import * as momentNs from 'moment';
import { Router } from '@angular/router';

const moment: typeof momentNs = momentNs;

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  userList: MatTableDataSource<User>;
  displayedColumns: string[] = ['teamId', 'name', 'role', 'ticket'];
  loggedInUser: User;
  userUnderEdit: User;

  constructor(private loginService: LoginService,
              private manageService: ManageService,
              private store: Store<fromUser.UserState>,
              private router: Router) {
  }

  ngOnInit() {
    this.loggedInUser = this.loginService.loggedInUser;
    this.store.pipe(select(fromUser.getAllUser)).subscribe((users) => {
      this.userList = new MatTableDataSource(users);
    });
    this.store.dispatch(new LoadUsersAction(this.loggedInUser));
  }

  onConfirm(data) {
    this.store.dispatch(new EditTicketAction({id: data.id, changes: {ticketNumber: data.ticketNumber}}));
  }

  editing(user): void {
    this.userUnderEdit = user;
  }

  logout() {
    this.store.dispatch(new ClearStoreAction());
    this.loggedInUser = undefined;
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  get canEditTicket(): boolean {
    return this.loggedInUser.role === 'teamLeader' && moment().date() < 31;
  }
}
