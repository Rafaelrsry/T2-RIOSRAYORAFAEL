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
  selector: 'app-pregunta-tres',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './pregunta-tres.component.html',
  styleUrl: './pregunta-tres.component.css'
})
export class PreguntaTresComponent {
  mostrarResultado = false;
  resultadofinal = "";
  

  formMaterias = {
    materias :null
    
  }
  
  calcularCostoMatricula():void {

    let costoTotal = 520;
    let descuento = 0;
    let final = 0;
    let materias = Number(this.formMaterias.materias);

    if(materias <=0){
      this.resultadofinal = "No pueden ser 0 las materias"
    }

    if(materias>5){
       descuento = costoTotal * 0.1;
      final =  costoTotal - descuento; 

    }else {
      final = costoTotal;
    }

    this.mostrarResultado = true;
    this.resultadofinal = "Pago final" + final.toString();
    

  }



}
