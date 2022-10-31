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
import { defineComponent, ref, computed, onMounted } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "IndexPage",
  setup() {
    var lefttop = ref(false);
    var leftbelow = ref(false);
    var righttop = ref(false);
    var rightbelow = ref(false);
    function ccblt(e, go) {
      leftbelow.value = false;
      righttop.value = false;
      rightbelow.value = false;
      console.log(lefttop.value);
      if (lefttop.value == true) {
        api
          .post("/videoreq", { where: "lt" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      } else {
        api
          .post("/videoreq", { where: "None" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      }
    }
    function ccblb(e, go) {
      lefttop.value = false;
      righttop.value = false;
      rightbelow.value = false;
      if (leftbelow.value) {
        api
          .post("/videoreq", { where: "lb" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      } else {
        api
          .post("/videoreq", { where: "None" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      }
    }
    function ccbrt(e, go) {
      lefttop.value = false;
      leftbelow.value = false;
      rightbelow.value = false;
      if (righttop.value) {
        api
          .post("/videoreq", { where: "rt" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      } else {
        api
          .post("/videoreq", { where: "None" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      }
    }
    function ccbrb(e, go) {
      lefttop.value = false;
      leftbelow.value = false;
      righttop.value = false;
      if (rightbelow.value) {
        api
          .post("/videoreq", { where: "rb" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      } else {
        api
          .post("/videoreq", { where: "None" })
          .then((response) => {
            console.log(response.data);
          })
          .catch(() => {
            console.log("Error exists");
          });
      }
    }
    onMounted(() => {
      api
        .get("/videoreq/now")
        .then((response) => {
          //console.log(response.data);
          var ret = response.data;

          if (ret == "None") {
            lefttop.value = false;
            leftbelow.value = false;
            righttop.value = false;
            rightbelow.value = false;
          } else if (ret == "lt") {
            lefttop.value = true;
          } else if (ret == "lb") {
            leftbelow.value = true;
          } else if (ret == "rt") {
            righttop.value = true;
          } else if (ret == "rb") {
            rightbelow.value = true;
          }
        })
        .catch(() => {
          console.log("Error exists");
        });
    });
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
