import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = ""
  @Input() phrase: string = ""
  @Input() url: string = ""
  @Output() addiEvent = new EventEmitter<number>()
  addi(){
    this.addiEvent.emit(1)
  }
}
