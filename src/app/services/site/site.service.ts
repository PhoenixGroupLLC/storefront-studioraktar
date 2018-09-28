import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ConfigService } from 'src/app/services/config/config.service';
import { Site } from './site';
import { Category } from 'src/app/services/categories/category';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  create(site: Site) {
    const url: string = this.config.getAPIEndPoint('Sites');
    return this.http.post<Site>(url, site)
  }

  read(id: Number = null) {
    const url: string = this.config.getAPIEndPoint(id ? `Sites/${id}` : 'Sites');
    return this.http.get<Site>(url);
  }

  update(site: Site) {
    const url: string = this.config.getAPIEndPoint(`Sites/${site.id}`);
    return this.http.put<Site>(url, site);
  }

  delete(id: Number) {
    const url: string = this.config.getAPIEndPoint(`Sites/${id}`);
    return this.http.delete<Site>(url);
  }

  readCategories(site: Site) {
    const url: string = this.config.getAPIEndPoint(`Sites/${site.id}/categories`);
    return this.http.get<Site>(url);
  }

  createCategory(site: Site, category: Category) {
    const url: string = this.config.getAPIEndPoint(`Sites/${site.id}/categories`);
    return this.http.post<Category>(url, category);
  }

  deleteCategory(site: Site, category: Category) {
    const url: string = this.config.getAPIEndPoint(`Sites/${site.id}/categories`);
    return this.http.delete<Category>(url);
  }

}
