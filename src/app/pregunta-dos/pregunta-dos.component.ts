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
  selector: 'app-pregunta-dos',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './pregunta-dos.component.html',
  styleUrl: './pregunta-dos.component.css'
})
export class PreguntaDosComponent {
  mostrarResultado = false;
  resultadofinal = "";
  

  formUtilidad = {
    salario :null,
    anios:null
  }

  calcularUtilidad():void{
      let salario = Number(this.formUtilidad.salario);
      let anios = Number(this.formUtilidad.anios);
      let utilidad = 0;

      if(anios<1){
       utilidad = salario * 0.05;
      }else if(anios>=1 && anios<2){
        utilidad = salario * 0.07;
      }else if(anios>=2 && anios<5){
        utilidad = salario * 0.10;
      }else if(anios>=5 && anios<10){
        utilidad = salario * 0.15;
      }else {
        utilidad = salario * 0.20;  
      }

      this.mostrarResultado = true;
      this.resultadofinal = "Su utilidad es =" + utilidad.toString();

  }


  matcher = new MyErrorStateMatcher();
}
