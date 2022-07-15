import {Bulletin} from '../../../domain/models/bulletin/Bulletin';

export interface BulletinStates {
  loadingList: boolean,
  pageNo: number,
  pageSize: number,
  bulletins: Bulletin[] | null
}
