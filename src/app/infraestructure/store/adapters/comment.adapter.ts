import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {CommentResponse} from '../../../domain/models/comment/CommentResponse';

const selectId = (commentResponse: CommentResponse): number => commentResponse.id!;

export const commentEntityAdapter: EntityAdapter<CommentResponse> = createEntityAdapter(
  {selectId, sortComparer: false}
);
