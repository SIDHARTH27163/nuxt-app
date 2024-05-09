// CustomWidget.vue

<template>
  <div>
    <!-- Your widget template here -->
    <p>Name: {{ data.name }}</p>
    <p>Category: {{ data.category }}</p>
    <p>Zoo ID: {{ data.zoo.id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
