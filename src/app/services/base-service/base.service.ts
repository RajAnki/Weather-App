import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import {isNullOrUndefined} from 'util';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService {

  constructor(protected http: HttpClient) { }


  /**
   * Internal BaseService function to take care of constructing URL
   * It appends CORS-anywhere url
   * @param contextUrl url string of form test/test
   * @param object of type any but in general{key1:value1, key2:value2}
   * @returns a String www.example.com/test/test?key1=value2&key2=value2
   */
  public constructURI(contextUrl: string) {

    const url =  'https://cors-anywhere.herokuapp.com/' + contextUrl;
    return url;
  }

  /**
   * function for taking care of http 'GET' calls.
   * Has to be called with uriContext and will construct the URL internally.
   * Can be called with param along with uriContext and will constuct the URL with param as key value pair.
   * @returns an {Observable<any>} of the response from the server
   */
  httpGet(uriContext: string, param?: any) {
    return this.http.get(this.constructURI(uriContext))
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * @desc Application wide common function for taking care of data extraction.
   * Has to be called with the API response.
   *
   * @returns an {Observable<any>} of the success or error response from the server
   */
  public extractData(res: any): any | undefined {
    const body = res;
    // Check the status..move error list to error handler here?
    if ((!isNullOrUndefined(body.successful) && body.successful === true)
      || (isNullOrUndefined(body.errors))) {
      return body || {};
    } else {
      this.handleError(body.errors);
      return;
    }
  }

  /**
   * @desc Application wide common function for taking care of Error Handling.
   * Has to be called with and instance of HttpErrorResponse
   *
   * @returns an {Observable<any>} of the error response from the server
   */
  public handleError(error: HttpErrorResponse | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {
      try {
        if (error.status === 500) {    // handle 400 as well?
          error = error.statusText;
        }
        return Observable.throw(error.error);
      } catch (e) {
        // body = null;
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
