import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit, OnDestroy {
  // J'utilise le bang '!' pour spécifier à l'IDE que je compte initialiser la
  // valeur de l'attribut juste après (dans le constructeur)
  title!: string;
  description!: string;
  creationDate!: Date;
  likes!: number;
  imageUrl!: string;
  textLikeButton!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Leaves';
    this.description = 'Feuilles';
    this.creationDate = new Date();
    this.imageUrl = "https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg";
    this.likes = 4;
    this.textLikeButton = 'I like it !';
  }

  ngOnDestroy(): void {
  }

  onClickLike() {
    if (this.textLikeButton === 'I like it !') {
      this.likes++;
      this.textLikeButton = 'Oops, unlike';
    } else {
      this.likes--;
      this.textLikeButton = 'I like it !';
    }
  }

}
