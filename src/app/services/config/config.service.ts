import { Injectable } from '@angular/core';
import { BackendConfig } from './backend-config';
import { backendConfig } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getAPIEndPoint(resource: string): string {
    return `${backendConfig.protocol}://${backendConfig.host}/${backendConfig.path}/${resource}`;
  }
}
