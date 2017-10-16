import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Observable';
import { IonicNativePlugin } from '@ionic-native/core';
import { NavOptions } from 'ionic-angular';
import { Content } from 'ionic-angular/navigation/nav-interfaces';
import { ElementRef } from '@angular/core';

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return;
  }

}

export class DeepLinkerMock {

}

export class NavParamsMock {
  static returnParam = null;
  public get(key): any {
    if (NavParamsMock.returnParam) {
      return NavParamsMock.returnParam
    }
    return 'default';
  }
  static setParams(value) {
    NavParamsMock.returnParam = value;
  }
}
export class ViewControllerMock {
  readReady = {
    subscribe() {

    }
  };
  writeReady = {
    subscribe() {

    }
  };

  onDidDismiss(callback: (data: any, role: string) => void): void {
    
  }

  dismiss(data?: any, role?: string, navOptions?: NavOptions): Promise<any> {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  
  _setHeader() {

  }
  _setNavbar() {

  }
  _setIONContent() {

  }
  _setIONContentRef() {

  }
}


export class LoadingMock extends ViewControllerMock {
 
  public present(navOptions?: NavOptions): Promise<any> {
    return new Promise((resolve) => {
      resolve(new Object);
    })
  }

}

export class LoadingControllerMock {
  public create(): LoadingMock {
    return new LoadingMock();
  }
}
export class ApiServiceMock {
  constructor(private loadingCtrl: LoadingControllerMock) {
    
  }
  public tagging(): any {
    return "";
  }

  public logging() {
  }

  public getLoaderWithoutDuration(content: string) {
    return this.loadingCtrl.create();
  }
}

let translations: any = { "testKey": "testValue" };
export class FakeTranslateLoader {
  public instant(key: string | Array<string>, interpolateParams?: Object): string | any {
    return translations.map(item => item.key == key).value;
  }
  public get(): Observable<any> {
    return Observable.of(translations);
  }

  public getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

export class translateServiceMock {
  public instant(key: string | Array<string>, interpolateParams?: Object): string | any {
    return translations.map(item => item.key == key).value;
  }
  public get(): Observable<any> {
    return Observable.of(translations);
  }
}

export class AppVersionMock extends IonicNativePlugin {
  public getVersionNumber(): Promise<any> {
    return new Promise((resolve) => {
      resolve(new String);
    })
  }

  public getVersionCode(): Promise<any> {
    return new Promise((resolve) => {
      resolve(new String);
    })
  }
}

export class touchIdMock extends IonicNativePlugin {
  public isAvailable(): Promise<any> {
    return new Promise((resolve) => {
      resolve(true);
    })
  }
  public verifyFingerprint(message: string): Promise<any> {
    return new Promise((resolve) => {
      resolve(new String);
    })
  }
}

export class passwordServiceMock {
  public getUsername(): any {
    return new Promise((resolve) => {
      resolve('username');
    })
  }

  public getPassword(): any {
    return new Promise((resolve) => {
      resolve('password');
    })
  }
}

export class UserDataServiceMock {
  public login(loginObj: any) {
    return Observable.of(new Object);
  }

  updateOnesignalPlayerId() {

  }
}

export class OneSignalMock {
  public getIds() {
    return new Promise((resolve) => {
      resolve({ userId: '1', pushToken: '2' });
    })
  }
}

