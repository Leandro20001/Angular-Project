import { Component, input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  schemas:[NO_ERRORS_SCHEMA],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
  
})
export class ButtonComponent implements OnInit{

  @Output() hideComponent: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };
  
  handleClick(): void{
    this.hideComponent.emit()
  };
  text:string ='Clique';
  
  id=20


}
