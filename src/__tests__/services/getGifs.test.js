import getGifs from 'services/getGifs';

describe('Test on getGifs Fetch', () => {
  it('should bring 15 elements', async () => {
    const gifs = await getGifs({ category: 'One Punch' });

    expect(gifs).toHaveLength(15);
  });

  it('should return an empty array when category is not sent', async () => {
    const gifs = await getGifs();

    expect(gifs).toHaveLength(0);
  });
});
