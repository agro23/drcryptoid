export class Reader {
  private password: string; // don't really ever do this
  constructor (
    public id: number,
    public name: string,
    public postIds: number[],
    public gravatar: string) {}
  // methods
}
