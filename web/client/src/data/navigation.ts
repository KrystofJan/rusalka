import { JSX } from 'react';

type GeneralNavigationItemInfo = {
  icon: JSX.Element;
  opened: boolean;
  label: string;
};

type NestedItem = {
  children: NavigationItem[];
  openedItem: boolean;
} & GeneralNavigationItemInfo;

type LinkableItem = {
  link: string;
} & GeneralNavigationItemInfo;

export type NavigationItem = LinkableItem | NestedItem;
