import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/Models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.css']
})
export class TableUsuariosComponent implements OnInit {

  constructor(private showsusers: UsersService, private router: Router) { }

  usuariosArray:Array<Users>
  data: any;


  ngOnInit(): void {
    this.data = this.showsusers.getUser().subscribe(data => {this.usuariosArray = data
  console.log(this.data)})

  }


}
