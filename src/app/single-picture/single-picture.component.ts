import { Component, OnInit } from '@angular/core';
import { Picture } from "../models/picture.model";
import { PicturesService } from "../services/pictures.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-picture',
  templateUrl: './single-picture.component.html',
  styleUrls: ['./single-picture.component.scss']
})
export class SinglePictureComponent implements OnInit {

  picture!: Picture;
  textLikeButton!: string;

  constructor(private pictureService: PicturesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const pictureId = +this.route.snapshot.params['id']; //type cast : le signe '+' permet de convertir le string en number
    this.picture = this.pictureService.getPictureById(pictureId);
    this.textLikeButton = !this.picture.liked ? 'I like it !' : 'Oops, unlike';
  }

  ngOnDestroy(): void {
  }

  onClickLike() {
    this.pictureService.onLikePictureById(this.picture.id, this.picture.liked);
    if (this.textLikeButton === 'I like it !') {
      this.textLikeButton = 'Oops, unlike';
    } else {
      this.textLikeButton = 'I like it !';
    }
  }
}
