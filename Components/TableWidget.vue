<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <!-- Render table header based on columns prop -->
          <th v-for="(column, index) in columns" :key="index">{{ column.label }}</th>
          <!-- Optionally render actions column if actions prop is true -->
          <th v-if="actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Render table rows based on data prop -->
        <tr v-for="(item, rowIndex) in data" :key="rowIndex">
          <!-- Render table cells based on columns prop -->
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            <!-- If the field is 'index', display the row index -->
            <template v-if="column.field === 'index'">{{ rowIndex + 1 }}</template>
            <!-- Otherwise, display the item value -->
            <template v-else>{{ getItemValue(item, column.field) }}</template>
          </td>
          <!-- Optionally render actions column with delete and edit buttons -->
          <td v-if="actions" class="row gap-2">
            <!-- Use ButtonWidget component with props received from zoo.vue -->
           
           <ButtonWidget 
              :btn-class="buttonClass" 
              :button-text="buttonText" 
              @button-click="deleteItem(item.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    actions: {
      type: Boolean,
      default: false
    },
    buttonClass: {
      type: String,
      default: 'btn'
    },
    buttonText: {
      type: String,
      default: 'Click me'
    }
  },
  methods: {
    getItemValue(item, field) {
      // Utility method to get the value of a field from the item
      const fields = field.split('.');
      let value = item;
      for (const f of fields) {
        value = value[f];
      }
      return value;
    },
     deleteItem(id) {
      // Emit delete event to parent component or perform delete action here
      this.$emit('delete', id);
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
