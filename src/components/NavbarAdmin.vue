<template>
  <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
    <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
      <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
    </a>
    <!-- <a href="#" class="sidebar-toggler flex-shrink-0">
      <i class="fa fa-bars"></i>
    </a> -->
    <form class="d-none d-md-flex ms-4">
      <input class="form-control border-0" type="search" placeholder="Search" />
    </form>
    <div class="navbar-nav align-items-center ms-auto">
      <!-- <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <i class="fa fa-envelope me-lg-2"></i>
          <span class="d-none d-lg-inline-flex">Message</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
        >
          <a href="#" class="dropdown-item">
            <div class="d-flex align-items-center">
              <img
                class="rounded-circle"
                src="img/user.jpg"
                alt=""
                style="width: 40px; height: 40px"
              />
              <div class="ms-2">
                <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            <div class="d-flex align-items-center">
              <img
                class="rounded-circle"
                src="img/user.jpg"
                alt=""
                style="width: 40px; height: 40px"
              />
              <div class="ms-2">
                <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            <div class="d-flex align-items-center">
              <img
                class="rounded-circle"
                src="img/user.jpg"
                alt=""
                style="width: 40px; height: 40px"
              />
              <div class="ms-2">
                <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                <small>15 minutes ago</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item text-center">See all message</a>
        </div>
      </div> -->

      <div class="nav-item">
        <a @click="confirmLogout" class="nav-link">
          <i class="bi bi-box-arrow-left me-lg-2"></i>
          <span class="d-none d-lg-inline-flex">Logout</span>
        </a>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img
            class="rounded-circle me-lg-2"
            src="img/user.jpg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <span class="d-none d-lg-inline-flex">{{ loggedInUser.name }}</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
        >
          <a href="#" class="dropdown-item">My Profile</a>
          <a href="#" class="dropdown-item">Settings</a>
          <!-- <a @click="confirmLogout" class="dropdown-item">Log Out</a> -->
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script lang="ts">
export default {
  name: "NavbarAdminView",
  data() {
    return {
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || {},
    };
  },
  methods: {
    confirmLogout() {
      // Munculkan konfirmasi alert
      if (confirm("Apakah Anda yakin ingin logout?")) {
        // Jika pengguna menekan tombol OK dalam alert, lakukan logout
        this.logout();
      }
    },
    logout() {
      // Hapus informasi pengguna dari localStorage
      localStorage.removeItem("loggedInUser");
      // Redirect ke halaman login
      this.$router.push("/");
      // Munculkan alert bahwa logout berhasil
      alert("Logout berhasil");
    },
  },
};
</script>