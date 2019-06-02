import {B} from './b';

describe('b', () => {
  it('should do something', () => {
    const b = new B();
    expect(b.doSomething()).toBe("B");
  });
});