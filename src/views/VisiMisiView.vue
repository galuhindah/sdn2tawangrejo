<template>
    <div class="home" style="text-align: center">
      <NavbarView />
      <div class="container">
        <div class="my-5">
          <div class="shadow rounded">
            <div class="py-2">
              <h3 class="text-success">Visi</h3>
              <p>UNGGUL DALAM MUTU, SANTUN DALAM PERILAKU</p>
            </div>
          </div>
        </div>
        <div class="my-5">
          <div class="shadow rounded">
            <div class="py-2">
              <h3 class="text-success">Misi</h3>
              <p style="text-align: left">
                <ol>
                  <li>Meningkatkan keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa, melalui pembinaan kerohanian.</li>
                  <li>Menghayati nilai-nilai agama yang dianut, untuk meningkatkan Iman dan Taqwa.</li>
                  <li>Melaksanakan Pembelajaran yang efektif dan efisien.</li>
                  <li>Menumbuhkembangkan semangat belajar seluruh warga sekolah.</li>
                  <li>Menanamkan budaya prestasi.</li>
                  <!-- Tambahkan item misi lainnya sesuai kebutuhan -->
                </ol>
              </p>
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
  name: "VisiMisiView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>
    