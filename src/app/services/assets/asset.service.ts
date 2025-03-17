import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssetModel } from '../../models/asset.model';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:5000';

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