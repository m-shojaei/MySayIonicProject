import { async, TestBed } from '@angular/core/testing';
import { LandingPage } from './landing-page';
import { IonicModule, NavParams } from 'ionic-angular';
import { Injector } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

describe('landingPage', () => {
    let component: LandingPage;
    let fixture: ComponentFixture<LandingPage>;
    let injector: Injector;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LandingPage],
            imports: [
                IonicModule.forRoot(LandingPage)
            ],

            providers: [
                { provide: NavParams, useClass: MockNavParams }
            ],
        }).compileComponents();


    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingPage);
        component = fixture.componentInstance;
    });
    
    it('should create the component', () => {
        //Act
        fixture.detectChanges();
        //Assert
        expect(component instanceof LandingPage).toBe(true, 'LandingPage was not created');
    });

    
})

class MockNavParams{
    data = {
    };
  
    get(param){
      return this.data[param];
    }
  }
