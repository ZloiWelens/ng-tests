import {compute} from './compute';

describe('compute', () => {
  it('should increment input if positive number', function () {
    const result = compute(10)
    expect(result).toBe(11)
  });
})
