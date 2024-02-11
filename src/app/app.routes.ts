import { Routes } from '@angular/router';
import { SeasonsComponent } from './seasons/seasons.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: "seasons", component: SeasonsComponent},
    {path: "cart", component: CartComponent},
];
