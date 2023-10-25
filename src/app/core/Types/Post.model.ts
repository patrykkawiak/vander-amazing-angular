export class Post {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
    public relaseDate: Date,
    public isFeatured?: boolean
  ) {}

}
