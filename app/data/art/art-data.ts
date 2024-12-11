import {MuralEntityData} from "./mural-entity.data";
import {PaintingEntityData} from "./painting-entity.data";
import {SketchbookEntityData} from "./sketchbook-entity";

export const muralData: MuralEntityData[] = [
  MuralEntityData.from(
    'mural',
    'Belem Tower',
    2017,
    'Lisbon',
    '/assets/images/art/murals/mural1.webp',
    [''],
  ),
  MuralEntityData.from(
    'mural',
    'A Street in Lisbon',
    2017,
    'Lisbon',
    '/assets/images/art/murals/mural2.webp',
    [''],
  ),
  MuralEntityData.from(
    'mural',
    'Famous Places of Barcelona',
    2017,
    'Barcelona',
    '/assets/images/art/murals/mural3.webp',
    [''],
  )
];

export const paintingData: PaintingEntityData[] = [
  PaintingEntityData.from(
    'painting',
    'Morning',
    2023,
    '/assets/images/art/paintings/painting2.webp',
    '/assets/images/art/paintings/painting2.webp',
  ),
  PaintingEntityData.from(
    'painting',
    'Morning Reflection',
    2023,
    '/assets/images/art/paintings/painting1_small.webp',
    '/assets/images/art/paintings/painting1.webp',
  ),
  PaintingEntityData.from(
    'painting',
    'Evening',
    2023,
    '/assets/images/art/paintings/painting4.webp',
    '/assets/images/art/paintings/painting4.webp',
  ),
  PaintingEntityData.from(
    'painting',
    'The Afternoon Nap',
    2023,
    '/assets/images/art/paintings/painting5_small.webp',
    '/assets/images/art/paintings/painting5.webp',
  ),
  PaintingEntityData.from(
    'painting',
    'Coneflower',
    2023,
    '/assets/images/art/paintings/painting3_small.webp',
    '/assets/images/art/paintings/painting3.webp',
  )
];


export const sketchbookData: SketchbookEntityData[] = [
  SketchbookEntityData.from(
    'sketchbook',
    'Lemons',
    2024,
    '/assets/images/art/sketchbook/sketch2_small.webp',
    '/assets/images/art/sketchbook/sketch2.webp',
  ),
  SketchbookEntityData.from(
    'sketchbook',
    'Oranges',
    2024,
    '/assets/images/art/sketchbook/sketch3_small.webp',
    '/assets/images/art/sketchbook/sketch3.webp',
  ),
  SketchbookEntityData.from(
    'sketchbook',
    'The flowering door and Iced coffee',
    2024,
    '/assets/images/art/sketchbook/sketch5_small.webp',
    '/assets/images/art/sketchbook/sketch5.webp',
  ),
  SketchbookEntityData.from(
    'sketchbook',
    'Winter Cabin',
    2024,
    '/assets/images/art/sketchbook/sketch7_small.webp',
    '/assets/images/art/sketchbook/sketch7.webp',
  ),
  SketchbookEntityData.from(
    'sketchbook',
    'Mountain Dreamscapes in Georgia',
    2024,
    '/assets/images/art/sketchbook/sketch8_small.webp',
    '/assets/images/art/sketchbook/sketch8.webp',
  ),
  SketchbookEntityData.from(
    'sketchbook',
    'Moon Over Mountains',
    2024,
    '/assets/images/art/sketchbook/sketch9_small.webp',
    '/assets/images/art/sketchbook/sketch9.webp',
  ),
];
