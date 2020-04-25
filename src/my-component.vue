<template>
  <div class="vue-hexagon" :class="options.className">
    <svg class="noselect" viewBox="-40 -20 850 700" :style="{ width: options.width + 'px', height: options.height + 'px' }">
      <path class="track" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
      <path class="fill" d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
      <text class="label" x="46%" y="52%">{{ this.options.label }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hexagon-graph',
  data() {
    return {};
  },
  props: {
    options: {
      type: Object,
      default: function() {
        return {
          width: 200,
          height: 200,
          primaryColor: '#45ad9a',
          secondaryColor: '#aaa',
          labelColor: '#000',
          label: '50%',
          value: 50,
          className: 'vue-hexagon-custom-class',
          thickness: 90,
          fontSize: 120,
        };
      },
    },
  },
  mounted() {
    this.renderHexagonGraph();
  },
  methods: {
    renderHexagonGraph() {
      const max = 2160;
      this.getGraphCall(document.querySelectorAll(`.${this.options.className}`), (index, value) => {
        value
          .querySelector(`.${this.options.className} svg .fill`)
          .setAttribute('style', `stroke-width: ${this.options.thickness}; stroke-dashoffset: ${((100 - this.options.value) / 100) * max}; stroke: ${this.options.primaryColor}`);
        value.querySelector(`.${this.options.className} svg .track`).setAttribute('style', `stroke-width: ${this.options.thickness}; stroke: ${this.options.secondaryColor}`);
        value.querySelector(`.${this.options.className} svg .label`).setAttribute('style', `fill: ${this.options.labelColor}; font-size: ${this.options.fontSize}px`);
      });
    },
    getGraphCall(array, callback, scope) {
      for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    },
  },
};
</script>

<style scoped>
.vue-hexagon {
  display: inline-block;
  text-align: center;
  margin: auto;
}
svg {
  margin: auto;
  background-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}
svg .track,
svg .fill {
  fill: rgba(0, 0, 0, 0);
  transform: translate(60px, 700px) rotate(-90deg);
}
svg .track {
  stroke-width: 40;
}

svg .fill {
  stroke: rgb(255, 255, 255);
  stroke-linecap: round;
  stroke-dasharray: 2160;
  stroke-dashoffset: 2160;
  transition: stroke-dashoffset 1s;
  stroke: rgb(104, 214, 198);
}
svg .label {
  text-anchor: middle;
  font-size: 160px;
}
</style>
