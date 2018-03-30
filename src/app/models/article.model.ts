export class Article {
  public artAssets: Object [];

  constructor (public id: number, public name: string, public author: string, public uploadDate: string, public articleHeader: string, public firstParagraph: string, public bodyCopy: string[], public link: string) {}

  // methods
}
