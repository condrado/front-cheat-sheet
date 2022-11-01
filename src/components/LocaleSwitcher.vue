<template>
    <select v-model="$i18n.locale">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    name: "LocaleSwitcher",
    data() {
      return { locales: ["es", "en"] };
    }
  };
  </script>

<style scoped lang="scss">
    select {
        background-color: transparent;
        border: 0;
        color: var(--bs-nav-link-color);
        text-transform: uppercase;
    }
</style>