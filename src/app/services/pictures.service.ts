import { Injectable } from '@angular/core';
import { Picture } from "../models/picture.model";
import picturesData from '../../assets/pictures-items.json';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  pictures: Picture[] = [
    {
      id: 1,
      title: "leaves",
      description: "colourful tree leaves",
      creationDate: new Date("2020-04-30T02:15:12.356Z"),
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg",
      likes: 75,
      liked: false,
      location: "in the forest"
    },
    {
      id: 2,
      title: "milky way",
      description: "Our milky way in the universe, seen from the Earth",
      creationDate: new Date("2020-04-30T02:15:12.356Z"),
      imageUrl: "https://cdn.pixabay.com/photo/2020/06/13/17/50/milky-way-5295153_960_720.jpg",
      likes: 8,
      liked: true,
      price: 4516.57
    },
    {
      id: 3,
      title: "fruit tray",
      description: "tray of colorful and fresh fruits, next to the swimming pool",
      creationDate: new Date("2022-04-17T06:30:19 -02:00"),
      imageUrl: "https://cdn.pixabay.com/photo/2019/07/29/05/53/pool-4369976_960_720.jpg",
      likes: 14,
      liked: false,
      location: "At the edge of the water"
    },
    {
      id: 4,
      title: "Countryside",
      description: "mountain cabins right by the quiet lake",
      creationDate: new Date("2022-10-25T01:22:13.356Z"),
      imageUrl: "https://cdn.pixabay.com/photo/2019/09/03/13/13/countryside-4449408_960_720.jpg",
      likes: 22,
      liked: false,
      location: "in the middle of the mountains",
      price: 584.2
    },
    {
      id: 5,
      title: "Mosque",
      description: "Mosque architecture",
      creationDate: new Date("2022-05-15T01:22:13.356Z"),
      imageUrl: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
      likes: 29,
      liked: true,
      location: "Abu Dhabi"
    },
    {
      id: 6,
      title: "Flower",
      description: "Pink flower of Frangipani/Plumeroa",
      creationDate: new Date("2021-11-09T02:21:04.356Z"),
      imageUrl: "https://cdn.pixabay.com/photo/2022/08/27/08/21/plumeria-7413942_960_720.jpg",
      likes: 8,
      liked: false,
      location: "unknown"
    }
  ]
  //   {
  //     id: 1,
  //     title: 'leaves',
  //     description: 'colourful tree leaves',
  //     creationDate: new Date(),
  //     imageUrl: "https://cdn.pixabay.com/photo/2017/08/08/01/17/colorful-2609978_960_720.jpg",
  //     likes: 75,
  //     liked: false,
  //     location: 'in the forest'
  //   },
  //   {
  //     id: 2,
  //     title: 'milky way',
  //     description: 'Our milky way in the universe, seen from the Earth',
  //     creationDate: new Date(),
  //     imageUrl: "https://cdn.pixabay.com/photo/2020/06/13/17/50/milky-way-5295153_960_720.jpg",
  //     likes: 8,
  //     liked: true,
  //     price: 4516.57
  //   }
  // ];

  // ------------ Tentative de récupération des Pictures du JSON File ------------
  // pictures: any = (picturesData as any).default;

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

  onLikePictureById(pictureId: number, liked: boolean): string {
    const selectedPicture = this.getPictureById(pictureId);
    if (liked) {
      selectedPicture.likes--;
      selectedPicture.liked = !selectedPicture.liked;
      return "Oops, unlike";
    } else {
      selectedPicture.likes++;
      selectedPicture.liked = !selectedPicture.liked;
      return "I like it !";
    }
  }

  // Sinon je pourrait utiliser les Literal Types !  exemple :
  // ça permet à l'IDE de proposer les types littéraux à l'appel de la méthode !

  // onLikePictureById(pictureId: number, liked: 'liked' | 'desliked'): void {
  //   const selectedPicture = this.getPictureById(pictureId);
  //   liked === 'liked' ? selectedPicture.likes++ : selectedPicture.likes--;
  // }
}
