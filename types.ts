
export enum Screen {
  Home = 'HOME',
  Tutorial = 'TUTORIAL',
  Studio = 'STUDIO',
  Loading = 'LOADING',
  Result = 'RESULT',
  Gallery = 'GALLERY'
}

export interface Theme {
  id: string;
  name: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  author: string;
  likes: string;
  image: string;
  aspectRatio: string;
}
