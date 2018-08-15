export const Injectable = Class => {
  return new Class(...(Class.parameters || []));
};