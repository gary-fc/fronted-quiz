import {EntityAdapter, EntityState} from '@ngrx/entity';
import {Bulletin} from '../../../domain/models/bulletin/Bulletin';


export interface BulletinStates extends EntityState<Bulletin> {
  loadingList?: boolean,
  pageNo?: number,
  pageSize?: number
}
