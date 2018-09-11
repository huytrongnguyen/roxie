import { Singleton } from '~/core';

export const Route = (route = '') => Controller => {
  const controller = Singleton(Controller);
  controller.$routePath = route;
  return controller;
};

['Get', 'Post', 'Put', 'Delete'].forEach(method => exports[method] = (actionName = '') => (controller, controllerName, descriptor) => {
  !controller.$routes && (controller.$routes = []);
  controller.$routes.push({ method, actionName, action: descriptor.value });
});