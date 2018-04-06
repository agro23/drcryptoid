export class Article {
  public artAssets: Object [];
  // Article is going to be recursive with the comments when they are enabled!
  constructor (
    public id: number,
    public name: string,
    public author: string,
    public level: string,
    public rights: string,
    public uploadDate: string,
    public articleHeader: string,
    public lede: string,
    public bodyCopy: string,
    public link: string,
    public keywords: string[],
    public comments: Article[],
    public upvotes: number,
    public downvotes: number,
    public target: string
  ) {}

  // methods
}

/*

deprecated fields beacause of concatenating articles and comments:
public commentsIds: number[],

public id: number,
public author: string,
public uploadDate: string,
public articleLink: number,
public text: string,
public commentsIds: number []
*/
