import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RagisterModel } from "../models/ragister.model";

@Injectable()
export class AccountService {
  private apiUrl = environment.apiBaseUrl + 'api/';
  constructor(private http: HttpClient) {

  }

  ragisterUser(model: RagisterModel): Observable<any> {
    return this.http.post(`${this.apiUrl}Account/Ragister`, model);
  }
}
