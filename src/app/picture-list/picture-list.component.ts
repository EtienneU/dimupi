import { Component, OnInit } from '@angular/core';
import { Picture } from "../models/picture.model";
import {PicturesService} from "../services/pictures.service";

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {

  pictures!: Picture[];

  // Préférer private pour les injections de service, car ça empêche le template du component d'y accéder directement.
  constructor(private picturesService: PicturesService) { }

  ngOnInit(): void {
    this.pictures = this.picturesService.getAllPictures();
  }
}
