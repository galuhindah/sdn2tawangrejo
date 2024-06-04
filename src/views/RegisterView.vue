<template>
  <div class="home" style="text-align: center">
    <NavbarView />
    <div class="container">
      <div class="my-5">
        <div class="shadow rounded">
          <div class="p-2 px-5">
            <h3 class="text-success">Pendaftaran Peserta Didik Baru</h3>
          </div>
        </div>
        <div class="shadow rounded mt-4">
          <div class="py-4 px-5 text-center">
            <h5>
              Silahkan Datang Langsung Ke SD Negeri 2 Tawangrejo.
            </h5>
            <h5>
              Dusun I, Tawangrejo, Kec. Bayat, Kabupaten Klaten, Jawa Tengah
            </h5>
            <h5>Hari Senin s/d Sabtu</h5>
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
  name: "RegisterView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>
  