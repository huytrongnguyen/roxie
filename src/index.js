['Component', 'Controller', 'Service'].forEach(method => exports[method] = Class => {
  return new Class(...(Class.parameters || []));
});

export { RoxieServer } from './server';
export { Route, Get, Post, Put, Delete } from './server/route';
export { default as Ajax } from './core/ajax';