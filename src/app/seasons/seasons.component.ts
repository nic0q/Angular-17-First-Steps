import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-seasons',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './seasons.component.html',
  styleUrl: './seasons.component.css'
})
export class SeasonsComponent {
  games = [
    {
      id: 0,
      title: "Spring",
      phrase: "The first year you don't have other option to plant, but in the next years is better feed your animals and fish all the seasonal fishes, and plant strawberies the first day.",
      url: "https://video-game-guy.com/wp-content/uploads/2018/03/farming_Spring-1024x642.png"
    },
    {
      id: 1,
      title: "Summer",
      phrase: "A lot of seasonal fishes to catch.",
      url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/Stardew-Valley-Best-Things-To-Do-In-Summer-featured-image.jpg"
    },
    {
      id: 2,
      title: "Fall",
      phrase: "Mmm nothing interesting here, maybe the pumpkins are very useful.",
      url: "https://forums.stardewvalley.net/attachments/575eb0fd-d578-421c-990e-85b9e72ebd82-jpeg.4733/"
    },
    {
      id: 3,
      title: "Winter",
      phrase: "My favourite season! Maybe is because I don't have to plant, also the pigs does not produce, do not buy hay to feed the animals is a waste of time, focus on socialize with the villagers, see the calendar for doesn't lose their birthdays, also is better go to the desert and mine, craft a totem to fast travel at first hour of the day if you have luck on the TV, and finally break the little worms on the floor to find theasures.",
      url: "https://stardewcommunitywiki.com/mediawiki/images/5/5e/Calendar_Winter.png"
    }
  ]
}
