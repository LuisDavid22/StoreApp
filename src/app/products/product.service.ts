import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {

  constructor(http:HttpClient) { 

    super(http, API_URL + "/product")
  }
}
