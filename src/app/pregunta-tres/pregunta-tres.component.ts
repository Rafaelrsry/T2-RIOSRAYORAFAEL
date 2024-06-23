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
  
  calcularCostoMatricula(): void {
    let costoPorMateria = 52; // Costo por cada materia
    let final = 0;
    let materias = Number(this.formMaterias.materias);

    if (materias <= 0) {
        this.resultadofinal = "El número de materias debe ser mayor que 0";
    } else {
        final = materias * costoPorMateria;

        // Aplicar descuento solo si hay más de 5 materias
        if (materias > 5) {
            let descuento = final * 0.1; // 10% de descuento
            final -= descuento;
        }

        // Asegurar que el costo final no exceda el costo total de 520
        final = Math.min(final, 520);

        this.mostrarResultado = true;
        this.resultadofinal = "Pago final: S/" + final.toFixed(2); // Formato de salida con dos decimales
    }
}



}
