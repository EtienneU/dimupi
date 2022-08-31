export class Picture {
  id!: number;
  title!: string;
  description!: string;
  creationDate!: Date;
  imageUrl!: string;
  likes!: number;
  liked!: boolean;
  location?: string // propriété optionelle (d'où le '?')
  price?: number;
}
