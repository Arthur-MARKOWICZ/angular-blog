import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  id:string=''
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""


  ngOnInit(): void {
    
  }


}
