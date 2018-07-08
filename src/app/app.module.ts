import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { MyApp } from './app.component';
import { FCM } from '@ionic-native/fcm';
//import { Device } from '@ionic-native/device';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabsPage } from '../pages/tabs/tabs';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { TabChatPage } from '../pages/tab-chat/tab-chat';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ShowpushdetailPage } from '../pages/showpushdetail/showpushdetail';
var config = {
    apiKey: "AIzaSyD698bsIi7kTRnysiy4300Yb_3QXDmvfGw",
    authDomain: "combindchatapp-bundan.firebaseapp.com",
    databaseURL: "https://combindchatapp-bundan.firebaseio.com",
    projectId: "combindchatapp-bundan",
    storageBucket: "combindchatapp-bundan.appspot.com",
    messagingSenderId: "540848969392"
};

@NgModule({
    declarations: [
        MyApp,
        SidePaymentPage,
        SidePortfolioPage,
        SideSchedulePage,
        SideSettingPage,
        TabArticlePage,
        TabCoursePage,
        TabHomePage,
        TabServicePage,
        TabContactPage,
        TabsPage,
        RegisterPage,
        LoginPage,
        CoursedetailPage,
        TabChatPage,
        ShowpushdetailPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        SidePaymentPage,
        SidePortfolioPage,
        SideSchedulePage,
        SideSettingPage,
        TabArticlePage,
        TabCoursePage,
        TabHomePage,
        TabServicePage,
        TabContactPage,
        TabsPage,
        RegisterPage,
        LoginPage,
        CoursedetailPage,
        TabChatPage,
        ShowpushdetailPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        WebapiServiceProvider,
        GlobalProvider,
        NativeAudio,
        FCM,
      //  Device
    ]
})
export class AppModule { }
