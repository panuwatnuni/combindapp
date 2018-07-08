import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service'
import { GlobalProvider } from '../../providers/global/global'


@IonicPage()
@Component({
    selector: 'page-coursedetail',
    templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {
    getcid:number
    responseData: any
    baseUrl: any
    constructor(public navCtrl: NavController,
        public navParams: NavParams
        , public app: App
        , public webapi: WebapiServiceProvider
        , public alertCtrl: AlertController
        , public global: GlobalProvider) {
        this.baseUrl = global.baseURLAPI
        this.getcid = this.navParams.get('cid')
    }

    ionViewDidLoad() {
        this.webapi.getData('feed_course_detail.php?cid=' + this.getcid).then((res)=> {
            this.responseData = res
        },(error)=> {
            console.log(error)
        })
    }

}
