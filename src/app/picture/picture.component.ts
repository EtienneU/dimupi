import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Picture } from "../models/picture.model";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit, OnDestroy {
  // J'utilise le bang '!' pour spécifier à l'IDE que je compte initialiser la
  // valeur de l'attribut juste après (dans le constructeur)
  @Input() picture!: Picture;
  textLikeButton!: string;

  constructor() { }

  ngOnInit(): void {
    this.textLikeButton = 'I like it !';
  }

  ngOnDestroy(): void {
  }

  onClickLike() {
    if (this.textLikeButton === 'I like it !') {
      this.picture.likes++;
      this.textLikeButton = 'Oops, unlike';
    } else {
      this.picture.likes--;
      this.textLikeButton = 'I like it !';
    }
  }
}
