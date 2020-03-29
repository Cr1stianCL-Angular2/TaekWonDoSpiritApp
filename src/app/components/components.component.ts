import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Contacto } from 'app/models/contacto.model';
import { GogleRecaptchav3Request } from 'app/models/gogle-recaptchav3-request.model';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  MensajeEnviadoOK = '';

  /* catpcha*/
  //serviceURL:string ='www.taekwondospirit.cl/EnvioCorreo.php';
  serviceURL: string = 'webapi.php';
  contacto: Contacto;
  validateRecaptchaOK = false;
  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');
  SITE_KEY: string = '6LfMw9IUAAAAAGbbPfFQ70CapRvD0SWeG7-ljFYK'; ///(PRD)
  ////SITE_KEY:string = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; ///(DESA)
  recapchaVerificationURL: string =
    'https://www.google.com/recaptcha/api/siteverify';
  validationBody: GogleRecaptchav3Request;
  ipAddress: string = '';
  CapchaError: string = '';

  constructor(private renderer: Renderer, private httpClient: HttpClient) {}
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    //this.getIPAddress();
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function() {
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function() {
        input_group[i].classList.remove('input-group-focus');
      });
    }
  }

  EnviarCorreo(event) {
    this.CapchaError = '';
    this.contacto = new Contacto();
    this.contacto.correo = this.email.value;
    this.contacto.nombre = this.name.value;
    this.contacto.mensaje = this.message.value;
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
    setTimeout(() => {
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
      .get('https://api.ipify.org/?format=json')
      .subscribe((res: any) => {
        this.ipAddress = res.ip;
      });
  }
}
