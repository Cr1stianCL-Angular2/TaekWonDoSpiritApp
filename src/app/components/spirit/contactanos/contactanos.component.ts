import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'app/models/contacto.model';
import { GogleRecaptchav3Request } from 'app/models/gogle-recaptchav3-request.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss'],
})
export class ContactanosComponent implements OnInit {
  //serviceURL:string ='www.taekwondospirit.cl/EnvioCorreo.php';
  serviceURL: string = 'webapi.php'; ///(prd)
  //serviceURL: string = 'http://localhost/'; ///(desa)
  contacto: Contacto;
  SITE_KEY: string = '6LfMw9IUAAAAAGbbPfFQ70CapRvD0SWeG7-ljFYK'; ///(PRD)
  ////SITE_KEY:string = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; ///(DESA)
  recapchaVerificationURL: string =
    'https://www.google.com/recaptcha/api/siteverify';
  validationBody: GogleRecaptchav3Request;
  ipAddress: string = '';
  keyOK: boolean = false;
  validateRecaptchaOK = false;
  CapchaError: string = '';
  MensajeEnviadoOK = '';
  name2 = new FormControl('');
  email2 = new FormControl('');
  message2 = new FormControl('');
  focus;
  focus1;
  focus2;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    //this.getIPAddress();
  }

  EnviarCorreo(event) {
    this.CapchaError = '';
    this.contacto = new Contacto();
    this.contacto.correo = this.email2.value;
    this.contacto.nombre = this.name2.value;
    this.contacto.mensaje = this.message2.value;
    if (this.validateRecaptchaOK) {
      return this.httpClient
        .post(`${this.serviceURL}`, this.contacto)
        .subscribe(res => {
          this.enviadoOK();
          this.validateRecaptchaOK = false;
        });
    } else {
      this.CapchaError = 'Debes Realizar la Validacion Primero';
      return null;
    }
  }

  enviadoOK() {
    this.MensajeEnviadoOK =
      'Mensaje Enviado Exitosamente, te contactaremos a la brevedad!!!';
    console.log('enviadoOK');
    setTimeout(() => {
      console.log('enviadoOK set timeout');
      this.MensajeEnviadoOK = '';
    }, 6000);
  }

  verificaRecaptchav2(captchaResponse: string) {
    this.CapchaError = '';
    if (captchaResponse !== '' || captchaResponse != '') {
      this.validateRecaptchaOK = true;
    }
    /*
    this.validationBody = new GogleRecaptchav3Request();
    this.validationBody.response = captchaResponse;
    this.validationBody.secret = '6LfMw9IUAAAAAK5yHUURQAcZROhxRu3jnnnmgk3a'; ///(PRD);
    /////this.validationBody.secret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';///(DESA)
    this.validationBody.remoteip = this.ipAddress;   
    return this.httpClient
      .post(`${this.recapchaVerificationURL}`, this.contacto)
      .subscribe(res => {
      
        this.validateRecaptchaOK = true;
      });
      */
  }
  getIPAddress() {
    this.httpClient
      .get('http://api.ipify.org/?format=json')
      .subscribe((res: any) => {
        this.ipAddress = res.ip;
      });
  }
}
