export function getRandomFromArray<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomNameFragment(): string {
  const fragments = [
    'aggro',
    'ba',
    'bum',
    'cum',
    'cillin',
    'cock',
    'droopy',
    'dium',
    'der',
    'er',
    'fungus',
    'freium',
    'gium',
    'harem',
    'hium',
    'herpal',
    'ium',
    'ion',
    'icky',
  ];

  const randy = Math.floor(Math.random() * fragments.length);
  const selectedFragment = fragments[randy];

  return selectedFragment;
}

export function getRandomSideEffect(): string {
  // [amount] [body part] [condition]
  const amounts = ['all', 'one of your', 'half of your'] as const;
  const bodyParts = [
    'legs',
    'limbs',
    'brain cells',
    'teeth',
    'fingers',
    'toes',
    'orifices',
  ] as const;
  const aConditions = [
    'get bigger',
    'get swole',
    'taste delicious',
    'are immune to fire',
    'become highly flammable',
    'lose all strength',
  ] as const;

  // [descriptive] [descriptive] [condition]
  const descriptive = [
    'sticky',
    'muscular',
    'violent',
    'involuntary',
    'sudden',
    'painful',
    'unexplainable',
    'convulsive',
    'highly embarrassing',
    'squirty',
    // 'maggoty',
  ] as const;
  const bConditions = [
    'vomiting',
    'spasming',
    'narcolepsy',
    'genital pain',
    'hair loss',
  ] as const;

  // [descriptive] [descriptive] [condition] [in body part]
  const cCondition = [
    'swelling',
    'twitching',
    'rash',
    'lice',
    'infestation',
    'wasps nest',
    'hair growth',
    'fungal infection',
  ] as const;
  const bodyLocation = [
    'on head',
    'between legs',
    'in ears',
    'under fingernails',
    'between toes',
    'in armpits',
    'in mouth',
    'in your butt',
  ] as const;

  const type = getRandomFromArray(['A', 'B', 'C']) as 'A' | 'B' | 'C';
  console.log('type:', type);
  const generatedEffect = [];
  if (type === 'A') {
    // A [amount] [body part] [condition]
    generatedEffect.push(
      getRandomFromArray(amounts),
      getRandomFromArray(bodyParts),
      getRandomFromArray(aConditions)
    );
  } else if (type === 'B') {
    // B [descriptive] [descriptive] [condition]
    generatedEffect.push(
      getRandomFromArray(descriptive),
      getRandomFromArray(descriptive),
      getRandomFromArray(bConditions)
    );
  } else {
    // C [descriptive] [descriptive] [condition] [in body part]
    generatedEffect.push(
      getRandomFromArray(descriptive),
      getRandomFromArray(descriptive),
      getRandomFromArray(cCondition),
      getRandomFromArray(bodyLocation)
    );
  }

  const effect = generatedEffect.join(' ');
  return effect;
}

export function getRandomCureMethod(): string {
  const cureMethods = [
    'hair',
    'fat',
    'sense of direction',
    'cells',
    'eyes',
    'saliva',
    'libido',
  ];

  const selectedMethod = getRandomFromArray(cureMethods);
  return selectedMethod;
}

export type Option = {
  name: string;
  id: number;
};

export function generateOptions(amount: number, generator: Function): Option[] {
  return Array.from({ length: amount }).map((_, i) => ({
    name: generator(),
    id: i,
  }));
}

export function moveOption<T extends { id: number }>(
  arrayFrom: T[],
  arrayTo: T[],
  optionId: number
): [T[], T[]] {
  const fromCopy = [...arrayFrom];
  const toCopy = [...arrayTo];
  const selectedIndex = fromCopy.findIndex((o) => o.id === optionId);
  const optionIsFound = selectedIndex !== -1;
  if (optionIsFound) {
    const optionToSelect = fromCopy.splice(selectedIndex, 1)[0];
    toCopy.push(optionToSelect);
  }

  return [fromCopy, toCopy];
}
