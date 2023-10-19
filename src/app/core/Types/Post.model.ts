export class Post {
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public relaseDate: Date,
    public isFeatured?: boolean
  ) {}

  // get featured() {
  //   if (!this.isFeatured) {
  //     return;
  //   }
  //   return this.isFeatured;
  // }
}
