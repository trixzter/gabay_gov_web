import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../app.constants';

const baseUrl = BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${baseUrl}/`, formData);
  }

  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${baseUrl}/${filename}`, { responseType: 'blob' });
  }
}
