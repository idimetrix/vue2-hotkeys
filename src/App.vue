<template>
  <div id="app">
    <div v-hotkeys.prevent="keymap1" v-show="visible1" class="item1">
      Press `ctrl + esc` to toggle me! Hold `enter` to hide me!
    </div>

    <div v-hotkeys.prevent="keymap2" v-show="visible2" class="item2">
      Press `shift + esc` to toggle me! Hold `1` to hide me!
    </div>

    <div v-hotkeys.prevent="keymap3" v-show="visible3" class="item3">
      Press `alt + esc` to toggle me! Hold `2` to hide me!
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible1: true,
      visible2: true,
      visible3: true,
      keymap1: {
        "ctrl+esc": () => (this.visible1 = !this.visible1),
        enter: {
          keydown: () => (this.visible1 = false),
          keyup: () => (this.visible1 = true)
        }
      },
      keymap2: {
        "shift+esc": () => (this.visible2 = !this.visible2),
        "1": {
          keydown: () => (this.visible2 = false),
          keyup: () => (this.visible2 = true)
        }
      },
      keymap3: {
        "alt+esc": () => (this.visible3 = !this.visible3),
        "2": {
          keydown: () => (this.visible3 = false),
          keyup: () => (this.visible3 = true)
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  .item1 {
    background: #3c3b6e;
    padding: 2.5rem;
    margin: 2.5rem;
  }
  .item2 {
    background: #ffffff;
    padding: 2.5rem;
    margin: 2.5rem;
  }
  .item3 {
    background: #b22234;
    padding: 2.5rem;
    margin: 2.5rem;
  }
}
</style>
