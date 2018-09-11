import { Singleton } from '~/core';

export const Page = ({ route, component }) => PageModel => {
  const pageModel = Singleton(PageModel);
  pageModel.$route = route;
  pageModel.$component = component;
  return pageModel;
};