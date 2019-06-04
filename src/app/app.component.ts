import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDPJmB823TbQHOE1CC31_uDVnZF_8TXLA8",
      authDomain: "posts-af3e6.firebaseapp.com",
      databaseURL: "https://posts-af3e6.firebaseio.com",
      projectId: "posts-af3e6",
      storageBucket: "posts-af3e6.appspot.com",
      messagingSenderId: "256776839042",
      appId: "1:256776839042:web:cf3a397c70d8f826"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
