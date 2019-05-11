import {A} from './a';

describe('a', () => {
  it('should do something', () => {
    const a = new A();
    expect(a).toBeDefined();
    expect(a.doSomething()).toBe("A");
  })
});