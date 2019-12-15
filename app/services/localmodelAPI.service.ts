import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constructor } from '@angular/material/core/typings/common-behaviors/constructor';

import { IdatabaseServer } from 'app/classes/databaseServer';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
@Injectable()
export class localmodelAPI{ 

baseurl=environment.baseUrl;
urlChild="/api/DatabaseServers/forUserId/2/random";
 url=encodeURI(this.baseurl)+encodeURI(this.urlChild);
    constructor(private httpclient: HttpClient){    }

    getDatabaseServer():Observable<any> {
     // return this.httpclient.get<IdatabaseServer[]>("https://sqlmon-api.azurewebsites.net/api/DatabaseServers/forUserId/2/random")
      return this.httpclient.get(this.url).pipe(map(this.extractData));

      }
      private extractData(res: Response){
        let body = res.databaseServers;        
        return body || [];
    }
  

    // private handleError (error: Response | any) {
    //   // In a real world app, you might use a remote logging infrastructure
    //   let errMsg: string;
    //   if (error instanceof Response) {
    //     const body = error.json() || '';
    //     const err = body.error || JSON.stringify(body);
    //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //   } else {
    //     errMsg = error.message ? error.message : error.toString();
    //   }
    //   console.error(errMsg);
    //   return Observable.throw(errMsg);
    // }
  
    }