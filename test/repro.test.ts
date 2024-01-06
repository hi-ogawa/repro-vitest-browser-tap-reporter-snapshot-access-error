import { expect, test } from 'vitest';

test('repro', async () => {
  await expect(1).toMatchFileSnapshot('/inaccesible/path')
});
