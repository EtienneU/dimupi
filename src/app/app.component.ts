import { Component, OnInit } from '@angular/core';
import { Picture } from "./models/picture.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title! : string;
  myPicture1!: Picture;
  myPicture2!: Picture;
  myPicture3!: Picture;

  ngOnInit() {
    this.title = 'Dimupi';
    this.myPicture1 = new Picture(
      'Leaves',
      'Feuilles multicolores',
       new Date(),
      "https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg",
      10,
      'dans la forêt'
    );
    this.myPicture2 = new Picture(
      'Milky Way',
      'Voie lactée',
      new Date(),
      "https://cdn.pixabay.com/photo/2020/06/13/17/50/milky-way-5295153_960_720.jpg",
      8,
    );
    this.myPicture3 = new Picture(
      'Fruit Tray',
      'Plateau de fruits frais et colorés',
      new Date(),
      "https://cdn.pixabay.com/photo/2019/07/29/05/53/pool-4369976_960_720.jpg",
      14,
      'Au bord de l\'eau'
    );
  }
}
