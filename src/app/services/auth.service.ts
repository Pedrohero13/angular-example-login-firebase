import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "@firebase/app-compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("singUp succeses")
      })
      .catch((error) => {
        console.error(error)
      });
  }
  login = async () =>{
    const res = await this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user)
    //   .then(() => {
  }
   
  //       // Login successful
  //       console.log("login successful")

  //     })
  //     .catch((error) => {
  //       // An error occurred
  //     });
  // }
}
