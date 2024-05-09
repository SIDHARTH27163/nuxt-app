<script lang="ts">
import { ref } from 'vue';

const animal_name = ref('');
const animal_category = ref('');
const showSuccessAlert = ref(false);
const successMessage = ref('');

const handleSubmit = async (event: Event, idParameter: string) => { // Add idParameter as a parameter
console.log(idParameter)
  event.preventDefault();

  const formData = {
    name: animal_name.value,
    category: animal_category.value,
    zoo: {
      id: idParameter // Use the passed idParameter here
    }
  };

  try {
    const response = await fetch('http://localhost:8080/hibernate/webapi/animal/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const responseData = await response.json();
      showSuccessAlert.value = true;
      successMessage.value = responseData.message;
      animal_name.value = '';
      animal_category.value = '';

      setTimeout(() => {
        showSuccessAlert.value = false;
      }, 3000);
    } else {
      console.error('Failed to create zoo:', response);
    }
  } catch (error) {
    console.error('Error Inserting Animal:', error);
  }
};

const dismissAlert = () => {
  showSuccessAlert.value = false;
};

export default {
  data() {
    return {
      idParameter: ''
    };
  },
  mounted() {
    this.idParameter = this.$route.params.id;
  },
  methods: {
    handleSubmit,
    dismissAlert
  },
  setup() {
    return { animal_name, animal_category, showSuccessAlert, successMessage };
  }
};

</script>

<template>
  <div>
    <MainLayout>
      <div class="container px-4 py-4">
        <!-- <p>Parameter from URL: {{ idParameter }}</p> -->
        <div class="align-middle">
          <div class="col-lg-6 col-md-7 col-sm-8 container mx-auto form-container shadow-lg p-3">
            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="showSuccessAlert">
              <strong>Hii!</strong> {{ successMessage }}
              <button type="button" class="btn-close" @click="dismissAlert" aria-label="Close"></button>
            </div>
           <form @submit="handleSubmit($event, idParameter)">
              
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Animal Name</label>
                <input type="text" class="form-control" id="animal_name" v-model="animal_name">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Animal Category</label>
                <input type="text" class="form-control" id="category" v-model="animal_category">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>
