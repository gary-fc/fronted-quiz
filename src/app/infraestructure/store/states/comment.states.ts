import {EntityState} from '@ngrx/entity';
import {Bulletin} from '../../../domain/models/bulletin/Bulletin';
import {CommentResponse} from '../../../domain/models/comment/CommentResponse';

export interface CommentStates extends EntityState<CommentResponse> {
  loadingList?: boolean,
  bulletinId?: number
}
