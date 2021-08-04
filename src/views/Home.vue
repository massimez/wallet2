<template>
  <div class="home">
    <loader-screen />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoaderScreen from '@/components/LoaderScreen/index.vue';

export default defineComponent({
  name: 'Home',
  components: {
    LoaderScreen,
  },
});
</script>
