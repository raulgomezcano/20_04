import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Curso } from '../objeto_curso/curso';
import { ServicioCursosService } from '../servicio-cursos.service';
import { nivel } from '../objeto_curso/nivel';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  id=0
  nombre=""
  duracion:number
  nivel: nivel;
constructor(public activatedRoute: ActivatedRoute, public miServicio:ServicioCursosService, private router: Router){
  this.id = this.activatedRoute.snapshot.params["id"]
}
ngOnInit(){
}
actualizaCurso(){
  this.miServicio.actualizaCursoServicio(new Curso(this.id, this.nombre, this.duracion, this.nivel))
  this.router.navigate([""]);
}
}
