export class Picture {
  constructor(public title: string,
              public description: string,
              public creationDate: Date,
              public imageUrl: string,
              public likes: number,
              public location?: string // propriété optionelle (d'où le '?')
              ) {
  }
}
