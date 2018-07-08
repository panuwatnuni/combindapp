import { CoursedetailPage } from './../coursedetail/coursedetail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service'
import { GlobalProvider } from '../../providers/global/global'

@IonicPage()
@Component({
    selector: 'page-tab-course',
    templateUrl: 'tab-course.html',
})
export class TabCoursePage {
    responseData:any
    baseUrl: any
    constructor(public navCtrl: NavController,
        public navParams: NavParams
        , public app: App
        , public webapi: WebapiServiceProvider
        , public alertCtrl: AlertController
        , public global: GlobalProvider) {
        this.baseUrl = global.baseURLAPI
    }

    ionViewDidLoad() {
        this.webapi.getData('feed_course.php').then((res)=> {
            this.responseData = res
            console.log(res)
        },(error)=> {
            console.log(error)
        })
    }
    courseDetail = (id)=> {
        this.app.getRootNav().push(CoursedetailPage, {cid:id})
    }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        //begin
        setTimeout(() => {
            //end
            this.feeddata()
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    }

    feeddata() {
        this.webapi.getData('feed_course.php').then((res) => {
            this.responseData = res
            console.log(res)
        }, (error) => {
            console.log(error)
        })
    }
    
}
