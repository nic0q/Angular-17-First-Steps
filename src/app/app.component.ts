import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NICO';
  public ene:number = 0
  sum():void{
    this.ene+=1
  }
  public lista:number[] = [1,2,3,4]

  games = [
    {
      title: "Hello",
      phrase: "good",
      url: "https"
    }
  ]
}
