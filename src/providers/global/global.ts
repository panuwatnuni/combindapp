import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public baseURLAPI: string = 'http://10.1.99.148/combindrestapi/'
  public authKey: string = 'Basic YnVuZGFuOjEyMzQ='
}
