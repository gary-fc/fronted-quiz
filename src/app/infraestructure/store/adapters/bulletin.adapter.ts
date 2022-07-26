/**
 * @author Gary Franco
 * */
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Bulletin} from '../../../domain/models/bulletin/Bulletin';


const selectId = (bulletin: Bulletin): number => bulletin.bulletinId!;

export const bulletinEntityAdapter: EntityAdapter<Bulletin> = createEntityAdapter(
  {selectId, sortComparer: false}
);
