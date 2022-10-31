import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const useVideoState = defineStore("vs", {
  state: () => ({
    videotype: "None",
  }),

  getters: {
    videoname(state) {
      var videoPath = "~asset/";
      if (state.videotype == "None") {
        videoPath += "Softbeep.mp4";
      } else if (state.videotype == "rt") {
        videoPath += "rt.mp4";
      } else if (state.videotype == "rb") {
        videoPath += "rb.mp4";
      } else if (state.videotype == "lt") {
        videoPath += "lt.mp4";
      } else if (state.videotype == "lb") {
        videoPath += "lb.mp4";
      }

      return videoPath;
    },
  },

  actions: {
    getFromServer() {},
  },
});
