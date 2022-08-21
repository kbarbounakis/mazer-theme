import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSidebar from '../reducers/sidebar.reducer';

export const selectSidebarState = createFeatureSelector<fromSidebar.State>(
  fromSidebar.sidebarFeatureKey
);
