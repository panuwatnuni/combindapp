import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public baseURLAPI: string = 'http://localhost/combindrestapi/'
  public authKey: string = 'Basic YnVuZGFuOjEyMzQ='
}
