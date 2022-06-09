import {
  generateOptions,
  getRandomNameFragment,
  getRandomCureMethod,
  getRandomSideEffect,
} from './options.utils';
import type { Option } from './options.utils';
import { writable } from 'svelte/store';

export const nameOptions = writable(generateOptions(5, getRandomNameFragment));
export const cureOptions = writable(generateOptions(3, getRandomCureMethod));
export const sideEffects = writable(generateOptions(3, getRandomSideEffect));

export const selectedNameOptions = writable<Option[]>([]);
export const selectedCureOptions = writable<Option[]>([]);
export const selectedSideEffectOptions = writable<Option[]>([]);
