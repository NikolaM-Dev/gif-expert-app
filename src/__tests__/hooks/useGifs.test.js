import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

import useGifs from 'hooks/useGifs';

describe('Tests on useGifs custom hook', () => {
  it('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGifs({ category: 'Rick and Morty' })
    );
    const { gifs, loading } = result.current;
    await waitForNextUpdate();

    expect(gifs).toHaveLength(0);
    expect(loading).toBeTruthy();
  });

  it('should return an array of imgs and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGifs({ category: 'Rick and Morty' })
    );
    await waitForNextUpdate();
    const { gifs, loading } = result.current;

    expect(gifs).toHaveLength(15);
    expect(loading).toBeFalsy();
  });
});
