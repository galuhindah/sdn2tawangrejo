<template>
  <div class="home" style="text-align: center">
    <NavbarView />
    <div class="container">
      <div class="my-5">
        <div class="shadow rounded">
          <div class="p-2 px-5">
            <h3 class="text-success">Sejarah</h3>
          </div>
        </div>
        <div class="shadow rounded mt-4">
          <div class="py-4 px-5">
            <p class="text-justify">
              SD Negeri 2 Tawang Rejo yang terletak di Tawangrejo, Kecamatan
              Bayat, Kabupaten Klaten, Jawa Tengah, merupakan sebuah lembaga
              pendidikan dasar yang berada di bawah naungan Kementerian
              Pendidikan dan Kebudayaan. Dalam kegiatan operasionalnya, sekolah
              ini memastikan penyediaan listrik yang diperlukan untuk
              memperlancar proses belajar mengajar yang bersumber dari penyedia
              listrik nasional, PLN. Selain itu, untuk meningkatkan aktivitas
              pendidikan, SD Negeri 2 Tawang Rejo menyediakan akses internet
              yang difasilitasi oleh penyedia Smartfren. Terakreditasi dengan
              nilai B yang dibuktikan dengan sertifikat 044/BANSM-JTG/SK/X/2018,
              SD Negeri 2 Tawang Rejo tetap menjaga komitmennya terhadap
              pendidikan yang bermutu.
            </p>
          </div>
        </div>
        <div class="shadow rounded mt-4">
          <div class="py-4 px-5">
            <div class="fs-4 fw-bold text-success">
              Identitas Satuan Pendidikan
            </div>
            <div class="table-responsive my-4">
              <div class="py-4 px-5">
                <table class="table text-start">
                  <tbody>
                    <tr>
                      <th scope="row">Nama</th>
                      <td>: SD NEGERI 2 TAWANGREJO</td>
                    </tr>
                    <tr>
                      <th scope="row">NPSN</th>
                      <td>: 20309421</td>
                    </tr>
                    <tr>
                      <th scope="row">Alamat</th>
                      <td>: Jetis</td>
                    </tr>
                    <tr>
                      <th scope="row">Kode Pos</th>
                      <td>: 57462</td>
                    </tr>
                    <tr>
                      <th scope="row">Desa / Kelurahan</th>
                      <td>: Tawangrejo</td>
                    </tr>
                    <tr>
                      <th scope="row">Kecamatan / Kota (LN)</th>
                      <td>: Kec. Bayat</td>
                    </tr>
                    <tr>
                      <th scope="row">Kab. / Kota / Negara (LN)</th>
                      <td>: Kab. Klaten</td>
                    </tr>
                    <tr>
                      <th scope="row">Provinsi / Luar Negeri</th>
                      <td>: Jawa Tengah</td>
                    </tr>
                    <tr>
                      <th scope="row">Status Sekolah</th>
                      <td>: Negeri</td>
                    </tr>
                    <tr>
                      <th scope="row">Waktu Penyelenggaraan</th>
                      <td>: 6 / Pagi hari</td>
                    </tr>
                    <tr>
                      <th scope="row">Jenjang Pendidikan</th>
                      <td>: SD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
  name: "SejarahView",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>
    