require('./collection');

it('should return length of an array', () => {
  const arr = [0,1,2,3,4];
  expect(arr.count()).toBe(5);
});