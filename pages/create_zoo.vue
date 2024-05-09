<script lang="ts" setup>
import { ref } from 'vue';

// Define refs for name, city, and state
const name = ref('');
const city = ref('');
const state = ref('');

// Define variables for success alert
const showSuccessAlert = ref(false);
const successMessage = ref('');

// Function to handle form submission
const handleSubmit = async (event: Event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const formData = {
    name: name.value,
    "address":{
    city: city.value,
    state: state.value
  }};

  try {
    const response = await fetch('http://localhost:8080/hibernate/webapi/zoo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const responseData = await response.json();

      // Show success alert
      showSuccessAlert.value = true;
      successMessage.value = responseData.message;

      // Reset form fields
      name.value = '';
      city.value = '';
      state.value = '';

      // Automatically refresh after 5 seconds
      setTimeout(() => {
        showSuccessAlert.value = false;
      }, 3000);
    } else {
      console.error('Failed to create zoo:', response);
    }
  } catch (error) {
    console.error('Error creating zoo:', error);
  }
};

// Function to dismiss the success alert
const dismissAlert = () => {
  showSuccessAlert.value = false;
};
</script>

<template>
  <div>
    <MainLayout>
      <div class="container px-4 py-4">
        <div class="align-middle">
<div class="col-lg-6 col-md-7 col-sm-8 container  mx-auto form-container shadow-lg p-3">
  <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="showSuccessAlert">
    <strong>Hii!</strong> {{ successMessage }}
    <button type="button" class="btn-close" @click="dismissAlert" aria-label="Close"></button>
  </div>
  <form @submit="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Zoo Name</label>
      <input type="text" class="form-control" id="name"  v-model="name">
      
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Zoo City</label>
      <input type="text" class="form-control" id="city" v-model="city">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Zoo State</label>
      <input type="text" class="form-control" id="state" v-model="state">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>
