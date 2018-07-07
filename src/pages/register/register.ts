import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service'
@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    //กำหนดตัวแปร
    userData = {
        username: "",
        password: "",
        fullname: "",
        email: "",
        tel: "",
        status: ""
    }

    //ตัวแปรรับข้อมูล
    responseData:any;
    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public app:App
        , public alerCtrl:AlertController
        , public webapi: WebapiServiceProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }
    login () {
        this.app.getRootNav().push(LoginPage)
    }
    gotoDashboard () {
        this.app.getRootNav().push(TabsPage)
    }
    signup = ()=> {
        this.webapi.postData(this.userData,'register.php').then((result)=> {
            console.log(result)
            this.responseData = result
            if (this.responseData.userData) {
                this.alerCtrl.create({
                    title: 'สถานะการลงทะเบียน',
                    subTitle: 'Welcome ' + this.responseData.userData.fullname,
                    buttons: ['Dismiss']
                }).present()
                //ส่งกลับไปหน้าหลัก
                this.navCtrl.setRoot(TabsPage)
            }
        }, (error)=> {
           // this.responseNotfound = 'error'
            console.log(error)
        })
    }
}
