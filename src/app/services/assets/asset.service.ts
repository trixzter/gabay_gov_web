import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssetModel } from '../../models/asset.model';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private assets: AssetModel[] = [];

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${baseUrl}/`, formData);
  }

  download(filename: string): Observable<Blob> {
    return this.http.get(`${baseUrl}/${filename}`, { responseType: 'blob' });
  }
}
