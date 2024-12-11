export class SketchbookEntityData {
  constructor(
    public kind: string,
    public title: string,
    public year: number,
    public cover: string,
    public largeImage: string,
  ) {
  }

  public static from(
    kind: string,
    title: string,
    year: number,
    cover: string,
    largeImage: string
  ): SketchbookEntityData {
    return new SketchbookEntityData(kind, title, year, cover, largeImage);
  }
}
