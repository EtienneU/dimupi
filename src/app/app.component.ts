import { Component, OnInit } from '@angular/core';
import { Picture } from "./models/picture.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title! : string;
  myPictures!: Picture[];

  ngOnInit() {
    this.title = 'Dimupi';
    this.myPictures = [
      {
        title: 'leaves',
        description: 'feuilles multicolores',
        creationDate: new Date(),
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg",
        likes: 75,
        location: 'dans la forêt'
      },
      {
        title: 'milky way',
        description: 'Voie lactée',
        creationDate: new Date(),
        imageUrl: "https://cdn.pixabay.com/photo/2020/06/13/17/50/milky-way-5295153_960_720.jpg",
        likes: 8,
      },
      {
        title: 'fruit tray',
        description: 'Plateau de fruits frais et colorés',
        creationDate: new Date(),
        imageUrl: "https://cdn.pixabay.com/photo/2019/07/29/05/53/pool-4369976_960_720.jpg",
        likes: 14,
        location: 'Au bord de l\'eau'
      }
    ];
  }
}
