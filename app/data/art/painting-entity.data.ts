export class PaintingEntityData {
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
  ): PaintingEntityData {
    return new PaintingEntityData(kind, title, year, cover, largeImage);
  }
}
