import {Something} from './Something';

describe('Something', () => {
  it('should have a toString method', () => {
    const something = new Something();
    expect(something.toString()).toBe("AB");
  });
});