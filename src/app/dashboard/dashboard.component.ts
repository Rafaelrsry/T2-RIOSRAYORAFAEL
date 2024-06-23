import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute,
   
  ){

  }



  irPreguntaDos():void{
    this.router.navigate(["preguntados"], {relativeTo: this.route})
  }
  irPreguntaTres():void{
    this.router.navigate(["preguntatres"], {relativeTo: this.route})
  }
  irPreguntaCuatro():void{
    this.router.navigate(["preguntacuatro"], {relativeTo: this.route})
  }
 

}
