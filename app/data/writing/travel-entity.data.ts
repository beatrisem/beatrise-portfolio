export class TravelEntityData {
  constructor(
    public kind: string,
    public route: string,
    public title: string,
    public description: string,
    public contentOne: string,
    public contentTwo: string,
    public contentThree: string,
    public contentFour: string,
    public imgOne: string,
    public imgTwo: string,
    public imgThree: string,
    public cover: string,
    public images: string[],
  ) {
  }

  public static from(
    kind: string,
    route: string,
    title: string,
    description: string,
    contentOne: string,
    contentTwo: string,
    contentThree: string,
    contentFour: string,
    imgOne: string,
    imgTwo: string,
    imgThree: string,
    cover: string,
    images: string[]
  ): TravelEntityData {
    return new TravelEntityData(kind, route, title, description, contentOne, contentTwo, contentThree, contentFour, imgOne, imgTwo, imgThree, cover, images);
  }
}
