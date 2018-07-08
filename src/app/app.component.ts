import { ShowpushdetailPage } from './../pages/showpushdetail/showpushdetail';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform , AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { FCM } from '@ionic-native/fcm';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = TabsPage;

    pages: Array<{ title: string, component: any, icon:string}>;

    constructor(
        public platform: Platform
        , public statusBar: StatusBar
        , public splashScreen: SplashScreen
        , public fcm:FCM
        , public alertCtrl:AlertController) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'ตารางอบรม', component: SideSchedulePage, icon:"md-calendar" },
            { title: 'ผลงานของเรา', component: SidePortfolioPage, icon: "md-person" },
            { title: 'ช่องทางชำระเงิน', component: SidePaymentPage, icon: "logo-bitcoin" },
            { title: 'ตั้งค่าระบบ', component: SideSettingPage, icon: "md-settings" }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            //ลงทะเบียนเครื่อง push notification 
            if (!this.platform.is('core')) {
                //ลงทะเบียนเพื่อรับ token
                this.fcm.subscribeToTopic('all')
                this.fcm.getToken().then(token=> {
                    localStorage.setItem("token", token)
                }) 
                this.fcm.onNotification().subscribe(data=> {
                    //background mode
                    if (data.wasTapped) {
                        this.nav.push(ShowpushdetailPage, {sid:data.pid})
                    } else {
                        //Fourground mode
                      //  alert(JSON.stringify(data)) 
                        this.alertCtrl.create({
                            title:data.title,
                            subTitle:data.body,
                            message:'pid='+data.pid+'groub='+data.groub,
                            buttons: [{
                                text: 'ดูรายละเอียด',
                                handler:() => {
                                    this.nav.push(ShowpushdetailPage, {sid:data.pid})
                                }
                            }]
                        }).present()
                    }
                })
            }
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    }
}
