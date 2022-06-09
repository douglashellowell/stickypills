<script lang="ts">
  import { getRandomFromArray } from '../../stores/options/options.utils';

  type FromList<List> = List[keyof List];

  // [amount] [body part] [condition]
  const amounts = ['all', 'one of your', 'half of your'] as const;
  const bodyParts = ['legs', 'limbs', 'brain cells'] as const;
  const aConditions = ['get bigger', 'get swole', 'taste delicious'] as const;

  // [descriptive] [descriptive] [condition]
  const descriptive = [
    'sticky',
    'muscular',
    'violent',
    'involuntary',
    'sudden',
    'painful',
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
  ] as const;

  const type = getRandomFromArray(['A', 'B', 'C']) as 'A' | 'B' | 'C';

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
</script>

<p>{effect}</p>

<style>
  p {
    color: red;
  }
</style>
