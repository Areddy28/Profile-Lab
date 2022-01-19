import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: "",
    contact: "", 
    bio: ""
  };

  constructor(private profileservice : ProfileServiceService, private router : Router) { 
    this.user.name = profileservice.getUserProfile().name; 
    this.user.contact = profileservice.getUserProfile().contact; 
    this.user.bio = profileservice.getUserProfile().bio; 
  }

  ngOnInit(): void {
  }

}
