import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabArticlePage } from './../tab-article/tab-article';
import { TabServicePage } from '../tab-service/tab-service';
import { TabContactPage } from '../tab-contact/tab-contact';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    //กำหนดตัวแปล tabs ต่าง
    tab1Root:any = TabHomePage
    tab2Root:any = TabCoursePage
    tab3Root: any = TabServicePage
    tab4Root: any = TabArticlePage
    tab5Root:any = TabContactPage
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TabsPage');
    }

}
