<template>
  <nav class="navbar navbar-expand-lg bg-success sticky-top">
    <div class="container">
      <a class="navbar-brand text-white" href="/">SD Negeri 2 Tawangrejo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="/#"
              >Beranda</a
            >
          </li>
          <b-nav-item-dropdown class="dropdown" text="Profil" right>
            <b-dropdown-item href="/visi-misi">Visi, Misi</b-dropdown-item>
            <b-dropdown-item href="/sejarah">Sejarah</b-dropdown-item>
            <b-dropdown-item href="/data-siswa">Data Siswa</b-dropdown-item>
          </b-nav-item-dropdown>
          <li class="nav-item">
            <a class="nav-link text-white" href="/#fasilitas-sekolah"
              >Fasilitas</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/#ekstrakulikuler-sekolah"
              >Ekstrakulikuler</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/#galeri-sekolah"
              >Galeri</a
            >
          </li>
        </ul>
        <router-link class="nav-link text-white" to="/register">
          <b-button pill variant="outline-warning" size="sm"
            >Pendaftaran</b-button
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
};
</script>

<style>
.dropdown .nav-link {
  color: #fff; /* Atur warna teks menjadi putih */
}
</style>