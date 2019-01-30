export default {
  methods: {
    touchStart(e) {
      if (this.canvas) {
        this.canvas.emitEvent('touchstart', [e]);
      }
    },
    touchMove(e) {
      if (this.canvas) {
        this.canvas.emitEvent('touchmove', [e]);
      }
    },
    touchEnd(e) {
      if (this.canvas) {
        this.canvas.emitEvent('touchend', [e]);
      }
    },
  },
};
