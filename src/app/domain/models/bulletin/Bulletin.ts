export interface Bulletin {
  id?: number;
  accountId?: number;
  bulletinId?: number;
  senderUserId?: number;
  body?: string;
  createdDate?: Date;
  commentsCounter?: number;
  fileUrl?: null | string;
  userResponse?: User;
}

export interface User {
  accountID?: number;
  fullName?: string;
  username?: string;
  email?: string;
}
