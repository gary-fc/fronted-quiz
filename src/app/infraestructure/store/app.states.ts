import {BulletinStates} from './states/bulletin.states';
import {UserStates} from './states/user.states';

export interface AppStates {
  user: UserStates
  bulletin: BulletinStates
}
