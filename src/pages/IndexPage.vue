<template>
  <q-page class="flex flex-center">
    <div class="column">
      <div class="col">
        <q-checkbox size="150px" v-model="lefttop" val="150px" @click="ccblt" />
      </div>
      <div class="col">
        <q-checkbox
          size="150px"
          v-model="leftbelow"
          val="150px"
          @click="ccblb"
        />
      </div>
    </div>
    <div>
      <img
        alt="Quasar logo"
        src="~assets/ego_vehicle.png"
        style="width: 200px; height: 200px"
      />
    </div>
    <div class="column">
      <div class="col">
        <q-checkbox
          size="150px"
          v-model="righttop"
          val="150px"
          @click="ccbrt"
        />
      </div>
      <div class="col">
        <q-checkbox
          size="150px"
          v-model="rightbelow"
          val="150px"
          @click="ccbrb"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    var lefttop = ref([false]);
    var leftbelow = ref([false]);
    var righttop = ref([false]);
    var rightbelow = ref([false]);
    function ccblt(e, go) {
      leftbelow.value = false;
      righttop.value = false;
      rightbelow.value = false;
    }
    function ccblb(e, go) {
      lefttop.value = false;
      righttop.value = false;
      rightbelow.value = false;
    }
    function ccbrt(e, go) {
      lefttop.value = false;
      leftbelow.value = false;
      rightbelow.value = false;
    }
    function ccbrb(e, go) {
      lefttop.value = false;
      leftbelow.value = false;
      righttop.value = false;
    }
    return {
      ccblt,
      ccblb,
      ccbrt,
      ccbrb,
      lefttop: lefttop,
      leftbelow: leftbelow,
      righttop: righttop,
      rightbelow: rightbelow,
    };
  },
});
</script>
