<template>
  <button :class="btnClass" @click="handleClick">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Click me'
    }
  },
  methods: {
    handleClick() {
      // Emit a custom event to indicate that the button was clicked
      this.$emit('button-click');
    }
  }
};
</script>
