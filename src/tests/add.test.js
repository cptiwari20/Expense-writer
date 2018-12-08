function add(a, b){
  return a + b;
};

test('it should return 7', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
})