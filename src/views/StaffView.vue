<template>
    <div class="home" style="text-align: center">
      <NavbarView />
      <div class="container">
        <div class="my-5">
          <div class="shadow rounded">
            <div class="py-2">
              <h3 class="text-success">Data Guru dan Karyawan</h3>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>
      <FooterView />
    </div>
  </template>
    
    <style scoped>
  .text-justify {
    text-align: justify;
  }
  .text-spacing {
    letter-spacing: 5px;
  }
  </style>
    
    <script>
  // @ is an alias to /src
  import NavbarView from "@/components/Navbar.vue";
  import FooterView from "@/components/Footer.vue";
  
  export default {
    name: "StaffView",
    components: {
      NavbarView,
      FooterView,
    },
  };
  </script>
    