import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { reModel } from '../models/re.models';
import { NgForm } from '@angular/forms';
import { empresasService } from 'src/app/services/re.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
export class REComponent implements OnInit {
  @Output() salida = new EventEmitter();
  reg: reModel = new reModel();

constructor(private empresasService: empresasService) { }
ngOnInit(): void {
}
get currentVacantes(){
  return JSON.stringify(this.reg);
}
rere(forma: NgForm) {
  this.empresasService.registrarEmpresa(this.reg).then((re: any) => {
    Toast.fire(re.msg, '', 'success');
    forma.reset();
    this.salida.emit();
  }).catch((err: any) => {
    Toast.fire(err.error.msg, '', 'error');
  });
}
}
