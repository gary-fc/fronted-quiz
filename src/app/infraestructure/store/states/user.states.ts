import {Authorization} from '../../../domain/models/user/Authorization';
import {Credentials} from '../../../domain/models/user/Credentials';
import {User} from '../../../domain/models/user/User';

export interface UserStates {
  user: User | null;
  credentials: Credentials | null;
  authorization: Authorization | null;
}
