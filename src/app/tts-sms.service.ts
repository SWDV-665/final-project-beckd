import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class TtsSmsService {


  messageText: string = '';
  phoneNumber: string = '';

  constructor(public alertController: AlertController, public sms: SMS, public tts: TextToSpeech, public navCtrl: NavController) { }

  async enterText() {
    const alert = await this.alertController.create({
      header: 'Enter your text message below',
      inputs: [
        {
          name: 'text',
          placeholder: 'Your Text Message Here',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Hear Text',
          handler: (name) => {
            this.messageText = name
            console.log('name var is ', name)
            console.log('this.text = ', this.messageText)
            this.tts.speak(this.messageText).then(() => console.log('Success'))
              .catch((reason: any) => console.log(reason));
            this.textConfirm();
          }
        }
      ]
    });
    await alert.present();
  }
  
  async textConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you happy with your message?',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            this.editText();
          }
        },
        {
          text: 'Send SMS',
          handler: () => {
            this.sendSMS();
          }
        }
      ]
    });
    await alert.present();
  }

  async editText() {
    const alert = await this.alertController.create({
      header: 'Enter your text message below.',
      inputs: [
        {
          name: 'text',
        }
      ],
      buttons: [
        {
          text: 'Continue',
          handler: (name) => {
            this.messageText = name;
            this.textConfirm();
          }
        }
      ]
    });
    await alert.present();
  }

  async sendSMS() {
    const alert = await this.alertController.create({
      header: 'Enter the phone number below',
      inputs: [
        {
          name: 'text',
          placeholder: 'message to be sent to this number.',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Send Text',
          handler: (name) => {
            this.phoneNumber = name;
            console.log('number var is ', this.phoneNumber);
            console.log('text var is ', this.messageText);
            //@ts-ignore // for some reason the code on the next time was throwing an error on compile, but when ignored it works just fine.
            this.sms.send(this.phoneNumber.text, this.messageText.text);
            this.sendConfirm();
          }
        }
      ]
    });
    await alert.present();
  }
  async sendConfirm() {
    const alert = await this.alertController.create({
      header: 'Message sent!',
      buttons: [
        {
          text: 'Ok!',
          handler: () => {
            this.navCtrl.navigateForward('tabs/tab1')
          }
        }
      ]
    });
    await alert.present();
  }
}
