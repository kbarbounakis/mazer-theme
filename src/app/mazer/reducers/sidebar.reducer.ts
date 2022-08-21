import { Action, createReducer, on } from '@ngrx/store';
import * as SidebarActions from '../actions/sidebar.actions';
import { SIDEBAR_ITEMS } from './sidebar.items';

export const sidebarFeatureKey = 'sidebar';

export interface SidebarItem {
  name: string;
  key?: string;
  url?: string;
  icon?: string;
  submenu?: SidebarItem[];
}

export interface State {
  sidebarItems: SidebarItem[];
}

export const initialState: State = {
  sidebarItems: SIDEBAR_ITEMS
};

export const reducer = createReducer(
  initialState,
  on(SidebarActions.loadItems, state => state),
);
