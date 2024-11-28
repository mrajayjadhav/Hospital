import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1";

  getPatientList(): Observable<Patient[]> {
    // Use backticks for string interpolation
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }
}
