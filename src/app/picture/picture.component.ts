import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Picture } from "../models/picture.model";
import { PicturesService } from "../services/pictures.service";
import { Router } from "@angular/router";

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

  constructor(private pictureService: PicturesService,
              private router: Router) { }

  ngOnInit(): void {
    this.textLikeButton = !this.picture.liked ? 'I like it !' : 'Oops, unlike';
  }

  ngOnDestroy(): void {
  }

  onClickLike() {
    if (!this.picture.liked) {
      this.pictureService.onLikePictureById(this.picture.id, true);
      this.textLikeButton = 'Oops, unlike';
    } else {
      this.pictureService.onLikePictureById(this.picture.id, false);
      this.textLikeButton = 'I like it !';
    }
    this.picture.liked = !this.picture.liked;
  }

  onViewDetails() {
    this.router.navigateByUrl(`picture/${this.picture.id}`);
  }
}
