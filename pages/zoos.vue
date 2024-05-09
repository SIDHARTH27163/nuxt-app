<template>
  <div>
    <MainLayout>
      <div class="container px-4 py-4">
        <div class="align-middle">
          <div class="container">
           <div v-if="successMessage" class="alert alert-success" role="alert" v-show="showSuccessAlert">
              {{ successMessage }}
            </div>
            <!-- Show error message if deletion fails -->
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
            <!-- TableWidget component with props and event handlers -->
          <TableWidget :data="zooData" :columns="tableColumns" @delete="deleteItem" @edit="editItem" :actions="true" :buttonClass="'btn btn-danger'" :buttonText="'Delete'">

             
            
            </TableWidget>
            <!-- Show success message if successful deletion -->
           
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Define reactive variables
const zooData = ref(null);
const successMessage = ref('');
const errorMessage = ref('');
const showSuccessAlert = ref(false); 

// Define the columns variable with the required column configuration
const tableColumns = ref([
  { label: 'Index', field: 'index' },
  { label: 'Name', field: 'name' },
  { label: 'City', field: 'address.city' },
  { label: 'State', field: 'address.state' },
  // Add custom column for actions

]);

// Fetch data from the API endpoint on component mount
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8080/hibernate/webapi/zoo/read');
    const data = await response.json();
    zooData.value = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call fetchData on component mount
onMounted(fetchData);

// Function to delete an item
const deleteItem = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/hibernate/webapi/zoo/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      successMessage.value = 'Item deleted successfully';
      // Refresh the data after successful deletion
      fetchData();
      // Show success alert
      showSuccessAlert.value = true;
      // Hide the success alert after 3 seconds
      setTimeout(() => {
        showSuccessAlert.value = false;
      }, 3000);
    } else {
      const errorMessageText = await response.text();
      errorMessage.value = `Failed to delete item: ${errorMessageText}`;
    }
  } catch (error) {
    console.error('Error deleting item:', error);
    errorMessage.value = 'An error occurred while deleting the item. Please try again later.';
  }
};

// Placeholder function for handling edit action
const editItem = (item) => {
  // Handle edit action here
  console.log('Edit item:', item);
};
</script>

<style scoped>
.text-custom {
  color: #0062ff !important;
}
</style>
