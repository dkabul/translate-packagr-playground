import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'bd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [],
})
export class FooterComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }

}
