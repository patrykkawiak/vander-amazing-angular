export class Post {
  constructor(
    public title: string,
    public description: string,
    public isFeatured?: boolean
  ) {}

  //   get featured() {
  //     if (!this.isFeatured) {
  //       return;
  //     }
  //     return this.isFeatured;
  //   }
}
