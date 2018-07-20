export const Route = route => Controller => {
  const controller = new Controller();
  controller.route = route || '';
  return controller;
}

export const Get = route => action => {
  console.log(route);
  console.log(action);
}