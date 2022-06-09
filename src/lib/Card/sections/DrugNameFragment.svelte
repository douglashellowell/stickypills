<script lang="ts">
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
</script>

<p>{selectedFragment}</p>

<style>
  p {
    color: green;
    font-weight: 700;
  }
</style>
