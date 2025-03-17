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

  uploadFile(fileData: FormData): Observable<any> {
    return this.http.post<any>(`${baseUrl}/assets`, fileData); // Make sure backend expects `/upload`
  }

  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${baseUrl}/${filename}`, { responseType: 'blob' });
  }
}