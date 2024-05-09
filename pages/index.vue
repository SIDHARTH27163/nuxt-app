<script lang="ts" setup>

</script>

<template>
    <div>
        <MainLayout>
   
   
   
<div class="container py-3">
    <!-- Gallery -->
<div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src="~/assets/images/1.jpeg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Czoo"
      />
  
      <img
        src="~/assets/images/2.jpeg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain zoo"
      />
    </div>
  
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src="~/assets/images/3.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in tzoo"
      />
  
      <img
        src="~/assets/images/4.jpeg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Czoo"
      />
    </div>
  
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src="~/assets/images/7.jpeg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wavzoo"
      />
  
      <img
        src="~/assets/images/8.jpeg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite Natizoo"
      />
    </div>
    
  </div>
  <!-- Gallery -->
</div>

<div class="container mx-auto p-2">
<CustomWidget :data="{
    name: 'Lion',
    category: 'Mammal',
    zoo: {
      id: '12345'
    }
  }" />
</div>
          
        </MainLayout>

    </div>
</template>
