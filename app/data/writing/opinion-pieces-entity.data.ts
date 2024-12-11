export class OpinionPiecesEntityData {

  constructor(
    public kind: string,
    public route: string,
    public title: string,
    public excerpt: string,
    public description: string,
    public contentOne: string,
    public contentTwo: string,
    public contentThree: string,
    public quoteOne: string,
    public quoteTwo: string,
    public date: Date
  ) {}

  public static from(
    kind: string,
    route: string,
    title: string,
    excerpt: string,
    description: string,
    contentOne: string,
    contentTwo: string,
    contentThree: string,
    quoteOne: string,
    quoteTwo: string,
    date: Date
  ): OpinionPiecesEntityData {
    return new OpinionPiecesEntityData(kind, route, title, excerpt, description, contentOne, contentTwo, contentThree, quoteOne, quoteTwo, date);
  }
}
