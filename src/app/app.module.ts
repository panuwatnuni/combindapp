import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

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
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
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
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
