export class Picture {
  title!: string;
  description!: string;
  creationDate!: Date;
  imageUrl!: string;
  likes!: number;
  location?: string // propriété optionelle (d'où le '?')
  price?: number;
}
