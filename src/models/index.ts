
export type User = {
  id: number;
  name: string;
}

export type Album = {
  id: number;
  name: string;
  userId: number;
}

export type Photo = {
  id: number;
  albumId: number;
  url: string;
}
