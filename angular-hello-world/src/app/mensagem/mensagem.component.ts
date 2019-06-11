import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  msg: string;
  constructor() { 

    this.msg='Meu nome é: '
  }

  ngOnInit() {

  }

}
