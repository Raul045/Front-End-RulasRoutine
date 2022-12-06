import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {

  user: string = "assets/Imagenes/usuario.png";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  cancelEdit(){
    this.route.navigate(['/perfil'])
  }

}
