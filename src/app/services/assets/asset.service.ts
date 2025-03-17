import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../app.constants';


const baseUrl = 'http://127.0.0.1:5000';
=======


@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }


  uploadFile(fileData: FormData): Observable<any> {
    return this.http.post<any>(`${baseUrl}/assets`, fileData); // Make sure backend expects `/upload`

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${BASE_URL}/`, formData);

  }

  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${BASE_URL}/${filename}`, { responseType: 'blob' });
  }
}