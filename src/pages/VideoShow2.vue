<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <video muted autoplay loop>
        <source src="~assets/hanmoonchul.mp4" type="video/mp4" />
      </video>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "VedioShow",
  setup() {
    return {};
  },
});
</script>
