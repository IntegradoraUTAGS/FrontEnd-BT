import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.css']
})
export class REComponent implements OnInit {
  arrPersonas: Array<any> = [] as Array<JSON>;
  // tslint:disable-next-line: max-line-length
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  blnNext: boolean;
  strMessage: string;

  constructor() { }

  // tslint:disable-next-line: max-line-length
  addEmpresa(strNombre: string, strDir: string, strCorreo: string, intTelefono: number , strRFC: string, strPass: string, strCpass: string, strLugar: string, strGiro: string, strSize: string) {
    this.strMessage = '';
    this.blnNext = false;
    (strNombre) ? this.fnError() : this.fnError('Error favor de llenar el campo nombre.');
    (strDir) ? this.fnError() : this.fnError('Error favor de llenar el campo direccion.');
    // tslint:disable-next-line: max-line-length
    (strCorreo) ? (this.regexp.test(strCorreo)) ? this.fnError() : this.fnError('Error Correo no valido.') : this.fnError('Error favor de llenar el campo correo.');
    (intTelefono) ? this.fnError() : this.fnError('Error favor de llenar el campo telefono.');
    (strRFC) ? this.fnError() : this.fnError('Error favor de llenar el campo RFC.');
    (strPass) ? this.fnError() : this.fnError('Error favor de llenar el campo Contraseña.');
    (strCpass) ? this.fnError() : this.fnError('Error favor de llenar el campo Confirmar Contraseña.');
    (strCpass === strPass) ? this.fnError() : this.fnError('Las contraseñas no son iguales');
    (strLugar) ? this.fnError() : this.fnError('Error favor de llenar el campo Lugar.');
    (strGiro) ? this.fnError() : this.fnError('Error favor de llenar el campo Giro.');
    (strSize) ? this.fnError() : this.fnError('Error favor de llenar el campo Tamaño.');


    if (!this.blnNext) {
      const jsnPersona: any = {
        strNombre,
        strDir,
        strCorreo,
        intTelefono,
        strRFC,
        strPass,
        strCpass,
        strLugar,
        strGiro,
        strSize
      };
      this.arrPersonas.push(jsnPersona);
      console.log(this.arrPersonas);
    } else {
    }

  }

  fnError(msg?: string) {
    if (msg) {
      // console.log(msg);
      this.strMessage += msg + '<br>';
      this.blnNext = true;
      Swal.fire({
        icon: 'error',
        html: this.strMessage,
      });
    } else if (this.blnNext) {
      this.blnNext = true;
    } else {
      this.blnNext = false;
      Swal.fire({
        icon: 'success',
        text: 'Se han insertado los datos correctamente',
      });
    }
  }

  ngOnInit(): void {
  }

}
