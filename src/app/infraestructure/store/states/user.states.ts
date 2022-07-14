import {Authorization} from '../../../domain/models/user/Authorization';
import {User} from '../../../domain/models/user/User';

export interface UserStates {
  user: User | null;
  credential: Credential | null;
  authorization: Authorization | null;
}
