import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit {

  constructor(private showsusers: UsersService) { }

  usuariosArray:Array<Users>


  ngOnInit(): void {
    this.showsusers.mostarUsuarios().subscribe(data => {this.usuariosArray = data["data"]})

  }

}
