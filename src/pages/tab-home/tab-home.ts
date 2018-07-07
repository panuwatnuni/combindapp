import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
    selector: 'page-tab-home',
    templateUrl: 'tab-home.html',
})
export class TabHomePage {
    //อ่านค่าจาก local storage
    userDetail:any
    loginStatus:boolean 
    logoutStatus:boolean
    constructor(
        public navCtrl: NavController
        , public navParams: NavParams
        , public app:App) {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (!data){
            this.userDetail = { fullname: 'you are guest' }
            this.loginStatus = true
            this.logoutStatus = false
        } 
        else {
            this.userDetail = data.userData
            this.loginStatus = false
            this.logoutStatus = true
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TabHomePage');
    }

    register() {
        //ไม่ลอยเหนือ tabs 
       // this.navCtrl.push(RegisterPage)
       this.app.getRootNav().push(RegisterPage)
    }
    login() {
        this.app.getRootNav().push(LoginPage)
    }
    logout () {
        localStorage.removeItem('userData');
        this.navCtrl.setRoot(TabsPage)
    }

}
