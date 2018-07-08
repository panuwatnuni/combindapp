import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
    selector: 'page-tab-chat',
    templateUrl: 'tab-chat.html',
})
export class TabChatPage {

    fullname:string = ''
    massage:string = ''
    _chatSubscription;
    messages:object[] =[]

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public db: AngularFireDatabase
        , public audio: NativeAudio
        , public platform: Platform) {
        const data = this.fullname = JSON.parse(localStorage.getItem('userData'))
        if (data == null) {
            this.fullname = 'Guest'
        } else {
            this.fullname = data.userData.fullname
        }
        
        //Read from firebase
        this._chatSubscription = this.db.list('/chat').valueChanges().subscribe((res)=> {
        //play sound read message
        if (!this.platform.is('core')) this.audio.preloadSimple('uniqueId1', 'assets/sound/get_outto.mp3').then(null);
        this.messages = res
        
            console.log(res)
        }, (err)=> {
            console.log(err)
        })
    }

    ionViewDidLoad() {
     
    } 

    sendMessage =()=> {
        if (this.massage) {
            if (!this.platform.is('core'))  this.audio.play('uniqueId1').then(null)
            this.db.list('/chat').push({
                username: this.fullname,
                message: this.massage
            }).then(() => {

            }, (error) => {
                console.log(error)
            })
            this.massage = ''
        }
    }

}
