import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pregunta-cuatro',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './pregunta-cuatro.component.html',
  styleUrl: './pregunta-cuatro.component.css'
})
export class PreguntaCuatroComponent {


  mostrarResultado = false;
  resultadofinal = "";

  frmTasaAlcohol = {
    indicador :"",
    tasa:null
  }


  calcularTasa():void {
      let otratasa = Number(this.frmTasaAlcohol.tasa);
      let indicador = String(this.frmTasaAlcohol.indicador);
      let tasa = 0;

      switch (indicador.toUpperCase()) {
        case 'C':
          tasa = 0.3; // Camión
            break;
        case 'A':
          tasa = 0.3; // Autobús
            break;
        case 'T':
          tasa = 0.5; // Turismo
            break;
        case 'M':
          tasa = 0.3; // Motocicleta
            break;
        default:
            console.log("Tipo de vehículo no reconocido");
            
    }
    this.mostrarResultado = true;

    if(otratasa>tasa){
      this.resultadofinal = "Positivo en control de alcoholemia para vehículo tipo"
    }else {
      this.resultadofinal = "Negativo en control de alcoholemia para vehículo tipo"
    }


    
    

  }

}
