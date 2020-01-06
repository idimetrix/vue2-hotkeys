# vue2-hotkeys


Vue 2.x directive for binding hotkeys to components

## Play with it

[https://github.com/idimetrix/vue2-hotkeys](https://github.com/idimetrix/vue2-hotkeys)

## Install

```bash
$ npm i --save vue2-hotkeys
```

## Usage

```javascript
import Vue from 'vue'
import VueHotkeys from 'vue2-hotkeys'

Vue.use(VueHotkeys)
```

```vue
<template>
  <div id="app">
    <div v-hotkeys.prevent="keymap1" v-show="visible1">
      Press `ctrl + esc` to toggle me! Hold `enter` to hide me!
    </div>

    <div v-hotkeys.prevent="keymap2" v-show="visible2">
      Press `shift + esc` to toggle me! Hold `1` to hide me!
    </div>

    <div v-hotkeys.prevent="keymap3" v-show="visible3">
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
```

## Event Handler

- keydown (as default) 
- keyup

## Key Combination

Use one or more of following keys to fire your hotkeys.

- ctrl
- alt
- shift
- meta (windows / command)

## Modifiers

### prevent

Add the prevent modifier to the directive to prevent default browser behavior.

```vue
<template>
  <span v-hotkeys.prevent="keymap" v-show="show"> Press `ctrl + esc` to toggle me! Hold `enter` to hide me! </span>
</template>
```

### stop

Add the stop modifier to the directive to stop event propagation.

```vue
<template>
  <div v-hotkeys.stop="keymap">
    <span> Enter characters in editable areas doesn't trigger any hotkeys. </span>
    <input>
  </div>
</template>
```

## Key Code Alias

The default key code map is based on US standard keyboard.
This ability to provide their own key code alias for developers who using keyboards with different layouts. The alias name must be a **single character**.

### Definition

```javascript
import Vue from 'vue'
import VueHotkeys from 'vue2-hotkeys'

Vue.use(VueHotkeys, {
  name: 'hotkeys',
  alias: {
    '9': 57 // the key code of character '9'
  }
})
```

### Template

```vue
<span vue2-hotkeys="keymap"></span>
<script>
export default {
  foo () {
    console.log('Bar!')
  },
  computed: {
    keymap () {
      return {
        '9': foo
      }
    }
  }
}
</script>
```

## License

MIT