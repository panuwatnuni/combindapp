import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service'

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    userData = {
        username: "",
        password: ""
    }
    responseData: any;
    constructor(public navCtrl: NavController,
        public navParams: NavParams
        , public app: App
        , public webapi: WebapiServiceProvider
        , public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    signup() {
        this.navCtrl.setRoot(RegisterPage);
    }
    gotoDashboard() {
        this.app.getRootNav().push(TabsPage)
    }
    login = ()=> {
        if (!this.userData.username && !this.userData.password) {
            this.alertCtrl.create({
                title: 'FAIL LOGIN',
                subTitle: 'กรุณาตรวจสอบ username password',
                buttons: ['Dismiss']
            }).present()
        } else {
            this.webapi.postData(this.userData, 'login.php').then((res) => {
                this.responseData = res
                console.log(this.responseData)
                if (this.responseData.userData) {
                    this.alertCtrl.create({
                        title: 'LOGIN SUCCESS',
                        subTitle: 'Welcome ' + this.responseData.userData.fullname,
                        buttons: ['Dismiss']
                    }).present()
                } else {
                    this.alertCtrl.create({
                        title: 'FAIL LOGIN',
                        subTitle: '',
                        buttons: ['Dismiss']
                    }).present()
                }
            })
        }
       
    }
}
