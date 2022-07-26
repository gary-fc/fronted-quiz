export interface CommentResponse {
  id?: number;
  accountId?: number;
  senderUserID?: number;
  content?: string;
  repliesCounter?: null;
  createDate?: Date;
  isDeleted?: boolean;
  bulletinId?: number;
  parentComment?: null;
  user?: User;
}

export interface User {
  accountID?: number;
  fullName?: string;
  username?: string;
  email?: string;
}
