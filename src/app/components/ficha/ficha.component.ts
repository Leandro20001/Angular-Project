import { NgIf,NgClass } from '@angular/common';
import { Component,Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [NgIf,ButtonComponent],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  @Input() email!:string;
  @Input() role!:boolean
  allowed:boolean = false;
  toShow():void{
    this.allowed=true
  }



}
