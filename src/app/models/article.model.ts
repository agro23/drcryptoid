export class Article {
  public artAssets: Object [];

  constructor (
    public id: number,
    public name: string,
    public author: string,
    public uploadDate: string,
    public articleHeader: string,
    public lede: string,
    public bodyCopy: string[],
    public link: string,
    public keywords: string[],
    public commentsIds: number[],
    public upvotes: number,
    public downvotes: number
  ) {}

  // methods
}
