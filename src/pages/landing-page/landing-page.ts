import { Component } from '@angular/core';
import { TextBoxPage } from '../text-box-page/text-box-page';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html'
})

export class LandingPage {
 textToShow:any;
 
  constructor(public navParams: NavParams){
    this.textToShow = navParams.get('textToShow');
  }

  textBoxPage = TextBoxPage;
  
}
