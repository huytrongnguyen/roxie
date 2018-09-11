['Injectable', 'Singleton'].forEach(method => exports[method] = Class => {
  return new Class(...(Class.parameters || []));
});