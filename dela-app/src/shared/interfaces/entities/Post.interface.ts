export interface IPost {
  _id: number;
  userId: string;
  firstName: string;
  lastName: string;
  location?: string;
  createdAt?: string;
  description?: string;
  likes: LikesMap;
  comments: Comment[];
}
interface LikesMap {
  [id: string]: boolean;
}
export interface Comment {
  firstName: string;
  lastName: string;
  picturePath?: string;
  text: string;
  createdAt: Date;
}
