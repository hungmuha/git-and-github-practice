import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-hylian-shield',
  templateUrl: './hylian-shield.component.html',
  styleUrls: ['./hylian-shield.component.css']
})
export class HylianShieldComponent implements OnInit {

	shield: string;
	username: string;

  constructor(private userService: UserService) { }

  ngOnInit() {

  	this.username = this.userService.getUsername();
  	this.shield = `Behold ${this.username}'s sheildddd`;
  }

}
