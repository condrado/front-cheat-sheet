<template>
  <p>{{ $t('message') }}</p>
  <LocaleSwitcher />
</template>

<script>
import { defineComponent } from 'vue'
import LocaleSwitcher from "./LocaleSwitcher.vue";

export default defineComponent({
  name: 'HelloI18n',
  components: { LocaleSwitcher }

})
</script>

