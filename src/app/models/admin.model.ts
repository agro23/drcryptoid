export class Admin {
  private password: string; // don't really ever do this
  private powers: number[];
  constructor (
    public id: number,
    public name: string,
    public postIds: number[],
    public gravatar: string){};
}
