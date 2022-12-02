import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  /**
   * Imagenes y Varibales
   */
  
  logo: string = "assets/Imagenes/logo.png";

  ngOnInit(): void {
  }

}
