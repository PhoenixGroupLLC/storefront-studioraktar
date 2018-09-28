import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-admin2';
  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(["en", "hu"]);
    translate.setDefaultLang('hu');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'hu');
    console.log('Browser language', browserLang);

    translate.get('TITLE').toPromise().then((res) => document.title = res);
  }
}
