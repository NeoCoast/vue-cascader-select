import * as validators from '@/utils/validators';

describe('validateOptions', () => {
  const { validateOptions } = validators;

  it('should return true for valid options', () => {
    const validOptions = [
      { label: 'Test1', value: 'test1' },
      {
        label: 'Test2',
        value: 'test2',
        options: [
          { label: 'Test3', value: 'test3' },
        ],
      },
    ];

    expect(validateOptions(validOptions)).toBe(true);
  });

  it('should return false for invalid options', (done) => {
    let invalidOptions = [{ label: 'Test1' }];
    expect(validateOptions(invalidOptions)).toBe(false);

    invalidOptions = [{ value: 'test1' }];
    expect(validateOptions(invalidOptions)).toBe(false);

    invalidOptions = [{ label: 1 }];
    expect(validateOptions(invalidOptions)).toBe(false);

    invalidOptions = [{ label: 'Test1', options: 'options' }];
    expect(validateOptions(invalidOptions)).toBe(false);

    invalidOptions = [
      { label: 'Test1', value: 'test1' },
      {
        label: 'Test2',
        options: [
          { label: 'Test3' },
        ],
      },
    ];
    expect(validateOptions(invalidOptions)).toBe(false);
    done();
  });
});
