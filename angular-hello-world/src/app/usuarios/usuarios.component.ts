import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  name: string;
  constructor() { 
    this.name = 'osvaldo pow';
  }

  ngOnInit() {
  }

}
