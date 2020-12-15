import {compute} from './compute';

describe('compute', () => {
  it('should increment input if positive number', function () {
    const result = compute(10)
    expect(result).toBe(11)
  });

  it('should return 0 if input negative num', function () {
    const result = compute(-1)
    expect(result).toBe(0)
  });
})
