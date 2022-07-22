export interface CommentResponse {
  id?: number;
  accountId?: number;
  senderUserId?: number;
  content?: string;
  repliesCounter?: number;
  createDate?: Date;
  isDeleted?: boolean;
  bulletinId?: number;
}
