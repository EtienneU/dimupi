import { Component, OnInit } from '@angular/core';
import { Picture } from "../models/picture.model";
import { PicturesService } from "../services/pictures.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit {

  pictures!: Picture[];

  // Préférer private pour les injections de service, car ça empêche le template du component d'y accéder directement.
  constructor(private picturesService: PicturesService, private router: Router) { }

  ngOnInit(): void {
    this.pictures = this.picturesService.getAllPictures();
  }

  onClickHomePage(): void {
    this.router.navigateByUrl('');
  }

  onClickTopOfPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox and Opera
  }
}
