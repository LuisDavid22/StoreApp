import { IProduct } from "./products/product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError } from "rxjs";

export class ApiService {
  constructor(protected http: HttpClient, protected apiEndpoint: string) {}

  getAll() {
    return this.http.get(this.apiEndpoint).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getById(id) {
    return this.http.get(this.apiEndpoint + "/" + id).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  create(resource) {
    const headers = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.post(this.apiEndpoint, resource, headers).pipe(
      tap((data) => "Create resource: " + JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  edit(id, resource) {
    const headers = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

    return this.http.put(this.apiEndpoint + "/" + id, resource, headers).pipe(
      tap((data) => "edit resource:" + JSON.stringify(data)),
      catchError(this.handleError)
    );
  }

  delete(id) {
    this.http.delete(this.apiEndpoint + "/" + id).pipe(catchError(this.handleError));
  }

  handleError(error: Response) {
    return throwError(error);
  }
}
