import { moveOption } from '../lib/stores/options/options.utils';
import { describe, expect, it } from 'vitest';

describe('selectOption', () => {
  type Item = { id: number };

  it('moves single item from one array to another', () => {
    // arrange
    const from: Item[] = [{ id: 1 }];
    const to: Item[] = [];
    // act
    const [afterFrom, afterTo] = moveOption(from, to, 1);
    // assert
    expect(afterFrom).toEqual([]);
    expect(afterTo).toEqual([{ id: 1 }]);
  });
  it('selectes the correct item from a list', () => {
    // arrange
    const from: Item[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const to: Item[] = [];
    // act
    const [afterFrom, afterTo] = moveOption(from, to, 2);
    // assert
    expect(afterFrom).toEqual([{ id: 1 }, { id: 3 }, { id: 4 }]);
    expect(afterTo).toEqual([{ id: 2 }]);
  });
  it('should not mutate input arrays', () => {
    // arrange
    const from: Item[] = [{ id: 1 }, { id: 2 }];
    const to: Item[] = [];
    // act
    moveOption(from, to, 2);
    // assert
    expect(from).toEqual([{ id: 1 }, { id: 2 }]);
    expect(to).toEqual([]);
  });
  it('should return new arrays', () => {
    // arrange
    const from: Item[] = [{ id: 1 }];
    const to: Item[] = [];
    // act
    const [newFrom, newTo] = moveOption(from, to, 1);
    // assert
    expect(from).not.toBe(newFrom);
    expect(to).not.toBe(newTo);
  });
});
