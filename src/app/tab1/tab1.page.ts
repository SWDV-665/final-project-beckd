import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { NavController } from '@ionic/angular';
import { TtsSmsService } from '../tts-sms.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  text: string;

  constructor(public alertController: AlertController, public ttssms: TtsSmsService, public sms: SMS, public tts: TextToSpeech, public navCtrl: NavController) { }

  // Card content for HTML
  cardHeader = 'Text-to-Speech and SMS, in one convenient app.';
  cardTitle = 'Hear your text before you send it.';
  cardContent = 'Have confidence in your text! Click the purple button below to get started.';

  getStarted() {
    this.ttssms.enterText();
  }

}
