import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cargue',
  templateUrl: './cargue.component.html',
  styleUrls: ['./cargue.component.scss']
})
export class CargueComponent implements OnInit {

  data: any = null;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  async prueba(archivo: any) {
    console.log('Cargar archivo');
    let file = archivo.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = async (e) => {
      await this.cargarArchivo(fileReader.result);
      this.data = null;
    };
    fileReader.readAsText(file);
  }

  async cargarArchivo(data: any) {
    try {
      console.log(data);
      let response: any = await this.dataService.realizarCargue(data).toPromise();
      console.log(response);
      Swal.fire({
        title: 'Exito!',
        text: response['resultado'],
        icon: 'success',
        confirmButtonText: 'Aceptar',
        heightAuto: false
      })
    } catch (error) {
      console.log(error)
    }

  }



}

