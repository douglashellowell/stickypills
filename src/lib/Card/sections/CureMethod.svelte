<script lang="ts">
  import { getRandomFromArray } from '../../stores/options/options.utils';

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
</script>

<p>{selectedMethod}</p>

<style>
  p {
    color: blue;
  }
</style>
