import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  id:string=''
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string =" "
  @Input()
  cardDescription:string = " "
  ngOnInit(): void {
    
  }

}
