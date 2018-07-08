import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
@Injectable()
export class WebapiServiceProvider {
    constructor(public http: Http
        , public toast: ToastController
        , public global: GlobalProvider) {
    }

    //POS
    postData = (objdata, segment) => {
        return new Promise ((resolve, reject)=> {
            //Header
            let headers = new Headers();
            headers.append('Authorization', this.global.authKey)
            headers.append('Content-Type', 'application/json')

            this.http.post(this.global.baseURLAPI + segment, JSON.stringify(objdata), {headers: headers})
            .subscribe(res=>{
                resolve(res.json());
            },(err)=> {
                if (err.status == 0) {
                    this.toast.create({
                        message: 'มีข้อผิดพลาดติดต่อ API ไม่ได้',
                        duration: 3000
                    }).present()
                }
                reject(err)
            })
        })
    }
    getData = (segment) => {
        return new Promise((resolve, reject) => {
            //Header
            let headers = new Headers();
            headers.append('Authorization', this.global.authKey)
            headers.append('Content-Type', 'application/json')

            this.http.get(this.global.baseURLAPI + segment, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    if (err.status == 0) {
                        this.toast.create({
                            message: 'มีข้อผิดพลาดติดต่อ API ไม่ได้',
                            duration: 3000
                        }).present()
                    }
                    reject(err)
                })
        })
    }
}

