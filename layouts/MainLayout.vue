<template>
<Navbar/>
<div>
    <div class="banner">
        <div class="container my-4">
            <div class="row py-5">
                <div class="col-sm-7">
                    <h1 class="display-4 fw-bold roboto-medium">Zoo</h1>
                    <p class="roboto-regular paragraph">You don't need to read this. Now that you hav decided to read it anyways, its just some random dummy text to fill up the space for Bootstrap banner or hero section.</p>
                    <button class="btn btn-success">Learn More</button>
                </div>
                <div class="col-sm-5">
                    <img class="img-fluid banner-image" src="~/assets/zoo/logo.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <slot />
</div>
<Footer/>
   
    
</template>

<script>

</script>

