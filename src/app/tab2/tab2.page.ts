import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  cardHeader = 'A Simple App..';
  cardTitle = "Sometimes it's nice to hear something before you send it. If you are visually impaired, this could be vital to effective communication.";
  cardContent = 'So listen before you send all from the one simple app.';

}
