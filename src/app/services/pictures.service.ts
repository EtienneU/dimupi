import { Injectable } from '@angular/core';
import {Picture} from "../models/picture.model";

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  pictures: Picture[] = [
    {
      id: 1,
      title: 'leaves',
      description: 'feuilles multicolores',
      creationDate: new Date(),
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg",
      likes: 75,
      location: 'dans la forêt'
    },
    {
      id: 2,
      title: 'milky way',
      description: 'Voie lactée',
      creationDate: new Date(),
      imageUrl: "https://cdn.pixabay.com/photo/2020/06/13/17/50/milky-way-5295153_960_720.jpg",
      likes: 8,
      price: 4516.57
    },
    {
      id: 3,
      title: 'fruit tray',
      description: 'Plateau de fruits frais et colorés',
      creationDate: new Date(),
      imageUrl: "https://cdn.pixabay.com/photo/2019/07/29/05/53/pool-4369976_960_720.jpg",
      likes: 14,
      location: 'Au bord de l\'eau'
    },
    {
      id: 4,
      title: 'Countryside',
      description: 'Châlets et lac en campagne',
      creationDate: new Date(),
      imageUrl: "https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg",
      likes: 22,
      location: 'en pleine montagne',
      price: 584.2
    }
  ];

  getAllPictures(): Picture[] {
    return this.pictures;
  }

  getPictureById(pictureId: number): Picture {
    const resultPicture = this.pictures.find(picture => pictureId === picture.id);
    if (!resultPicture) {
      throw new Error('Picture not found with id = ' + pictureId);
    } else {
      return resultPicture;
    }
  }

  onLikePictureById(pictureId: number, liked: boolean): void {
    const selectedPicture = this.getPictureById(pictureId);
    liked ? selectedPicture.likes++ : selectedPicture.likes--;
  }

  // Sinon je pourrait utiliser les Literal Types !  exemple :
  // ça permet à l'IDE de proposer les types littéraux à l'appel de la méthode !

  // onLikePictureById(pictureId: number, liked: 'liked' | 'desliked'): void {
  //   const selectedPicture = this.getPictureById(pictureId);
  //   liked === 'liked' ? selectedPicture.likes++ : selectedPicture.likes--;
  // }
}
