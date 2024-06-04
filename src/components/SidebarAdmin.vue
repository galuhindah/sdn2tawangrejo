<template>
  <div>
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Icon Font Stylesheet -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />

    <div class="container-xxl position-relative bg-white d-flex p-0">
      <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-light navbar-light">
          <a href="/admin" class="navbar-brand mx-4 mb-3">
            <h3 class="text-primary">
              ADMIN
            </h3>
          </a>
          <div class="d-flex align-items-center ms-4 mb-4">
            <div class="position-relative">
              <img
                class="rounded-circle"
                src="/src/assets/Admin/img/user.jpg"
                alt=""
                style="width: 40px; height: 40px"
              />
              <div
                class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
              ></div>
            </div>
            <div class="ms-3">
              <h6 class="mb-0">{{ loggedInUser.name }}</h6>
              <span>{{ loggedInUser.role }}</span>
            </div>
          </div>
          <div class="navbar-nav w-100">
            <a href="/admin" class="nav-item nav-link active"
              ><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a
            >
            <a href="/admin/data-siswa" class="nav-item nav-link"
              ><i class="bi bi-people-fill me-2"></i>Data Siswa</a
            >
            <a href="/admin/data-guru" class="nav-item nav-link"
              ><i class="fa fa-id-card-alt me-2"></i>Data Guru</a
            >
            <a href="/admin/setting" class="nav-item nav-link"
              ><i class="bi bi-gear-fill me-2"></i>Setting</a
            >
          </div>
        </nav>
      </div>

      <div class="content">
        <NavbarAdminView />
        <ContentAdminView />
        <FooterAdminView />
      </div>
    </div>
  </div>
</template>

<style>
/* Import CSS file */
@import "../assets/Admin/css/style.css";
@import "../assets/Admin/css/bootstrap.min.css";
@import "../assets/Admin/lib/owlcarousel/assets/owl.carousel.min.css";
@import "../assets/Admin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
</style>
    
<script lang="ts">
import NavbarAdminView from "@/components/NavbarAdmin.vue";
import ContentAdminView from "@/components/ContentAdmin.vue";
import FooterAdminView from "@/components/FooterAdmin.vue";

export default {
  name: "SidebarAdminView",
  data() {
    return {
      loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || {},
    };
  },
  components: {
    NavbarAdminView,
    ContentAdminView,
    FooterAdminView,
  },
};
</script>
