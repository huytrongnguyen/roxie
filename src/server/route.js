export const Route = value => controller => {
  controller.$routePath = value;
}

['Get', 'Post', 'Put', 'Delete'].forEach(method => exports[method] = actionName => (...args) => {
  const controller = args[0],
        descriptor = args[2];

  !controller.$routes && (controller.$routes = []);
  controller.$routes.push({ method, actionName, action: descriptor.value });
});