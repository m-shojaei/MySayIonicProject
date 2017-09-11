
import { Component } from '@angular/core';
import { LandingPage } from '../landing-page/landing-page';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({ 
     templateUrl: '../text-box-page/text-box-page.html'
})
export class TextBoxPage {
    private form : FormGroup;
    
  constructor( private formBuilder: FormBuilder, public navCtrl: NavController ){
    this.form = this.formBuilder.group({
        something: ['', Validators.required]
        
      });
  }
  helloPage = LandingPage

  logForm(){
    console.log(this.form.value.something)
    this.navCtrl.push(LandingPage, {
        textToShow: this.form.value.something
      });
  }
  
}