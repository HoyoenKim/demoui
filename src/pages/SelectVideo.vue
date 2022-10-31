<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" v-if="vs == 'None'">
      <video muted autoplay loop>
        <source src="~assets/Softbeep.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="q-pa-md" v-else-if="vs == 'lt'">
      <video muted autoplay loop>
        <source src="~assets/lt.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="q-pa-md" v-else-if="vs == 'lb'">
      <video muted autoplay loop>
        <source src="~assets/lb.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="q-pa-md" v-else-if="vs == 'rt'">
      <video muted autoplay loop>
        <source src="~assets/rt.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="q-pa-md" v-else-if="vs == 'rb'">
      <video muted autoplay loop>
        <source src="~assets/rb.mp4" type="video/mp4" />
      </video>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "VedioShow",
  setup() {
    let timer;
    var vs = ref("None");
    onMounted(() => {
      api
        .get("/videoreq/now")
        .then((response) => {
          //console.log(response.data);
          vs.value = response.data;
        })
        .catch(() => {
          console.log("Error exists");
        });
      clearInterval(timer);
      timer = setInterval(() => {
        api
          .get("/videoreq/now")
          .then((response) => {
            //console.log(response.data);
            vs.value = response.data;
          })
          .catch(() => {
            console.log("Error exists");
          });
      }, 300);
    });
    return { vs: vs };
  },
});
</script>
