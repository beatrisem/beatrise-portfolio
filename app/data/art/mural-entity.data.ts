export class MuralEntityData {
  constructor(
    public kind: string,
    public title: string,
    public year: number,
    public location: string,
    public cover: string,
    public images: string[],
  ) {
  }

  public static from(
    kind: string,
    title: string,
    year: number,
    location: string,
    cover: string,
    images: string[],
  ): MuralEntityData {
    return new MuralEntityData(kind, title, year, location, cover, images);
  }
}
