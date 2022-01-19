import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  userProfile = {
    name: "Kevin Durant", 
    contact: "KD@gmail.com",
    bio: "", 
  }

  getUserProfile() {
    return this.userProfile; 
  }

  constructor() { }
}
