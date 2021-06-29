import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormConfig } from '../common/interfaces/form-config.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {
  }

  getForm(): Observable<IFormConfig> {
    return this.http.get<IFormConfig>(`${environment.stubDataUrl}`)

  }
  sendForm(form: IFormConfig): Observable<IFormConfig>{
    const {id , testForm}= form;
    const data: IFormConfig = {id: (id), testForm}
    return this.http.post<IFormConfig>(`${environment.apiUrl}/${id}`, data)
  }

}
