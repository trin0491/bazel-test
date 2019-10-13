import {C} from "./c";

describe('C', () => {
  it('should doSomething', () => {
    const c = new C();
    expect(c.doSomething()).toBe("something");
  });
});