export class Comment {
  public artAssets: Object [];

  constructor (
    public id: number,
    public author: string,
    public uploadDate: string,
    public articleLink: number,
    public text: string,
    public commentsIds: number []
  ) {}

  // methods
}
