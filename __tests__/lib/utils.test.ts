import { cn } from '@/lib/utils';

describe('cn', () => {
  it('склеивает только truthy классы', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b');
  });

  it('возвращает пустую строку если ничего нет', () => {
    expect(cn(false, null, undefined)).toBe('');
  });
});
