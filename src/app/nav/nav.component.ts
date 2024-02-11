import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterOutlet, RouterLinkActive, CartComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() total_c:number = 0
}
