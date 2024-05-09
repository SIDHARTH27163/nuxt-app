<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
       <NuxtLink class="navbar-brand" to="/"> <img class="img-fluid banner-image rounded" src="~/assets/zoo/logo.png" style="height:65px" alt=""></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
             <NuxtLink class="nav-link roboto-black active" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
             <NuxtLink class="nav-link roboto-black" to="/create_zoo">Create Zoo</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link roboto-black " to="/zoos">Zoos</NuxtLink>
             </li>
            <li class="nav-item">
                <NuxtLink class="nav-link roboto-black" to="/contact-us">Contact Us</NuxtLink>
               </li>
               <li class="nav-item">
                <NuxtLink class="nav-link roboto-black" to="/aboutus">About Us</NuxtLink>
               </li>
            
          </ul>
         
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  // You can add script logic here if needed
  export default {
    // Component options
  }
  </script>
  