import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { reModel } from '../models/re.models';
import { NgForm } from '@angular/forms';
import { reService } from 'src/app/services/re.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 're',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
export class REComponent implements OnInit {
  @Output() salida = new EventEmitter();
re: reModel = new reModel();

constructor(private reService: reService) { }
ngOnInit(): void {
}
get currentRe(){
  return JSON.stringify(this.re);
}
reEmpresa(forma: NgForm) {
  this.reService.re(this.re).then((re: any) => {
    Toast.fire(re.msg, '', 'success');
    forma.reset();
    this.salida.emit();
  }).catch((err: any) => {
    Toast.fire(err.error.msg, '', 'error');
  });
}
}
