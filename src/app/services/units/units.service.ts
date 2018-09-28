import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ConfigService } from 'src/app/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }
}
