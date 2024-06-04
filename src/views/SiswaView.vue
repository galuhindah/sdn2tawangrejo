<template>
  <div class="home" style="text-align: center">
    <NavbarView />
    <div class="container">
      <div class="my-5">
        <div class="shadow rounded">
          <div class="py-2">
            <h3 class="text-success">Data Siswa</h3>
          </div>
        </div>
      </div>

      <div class="my-5">
        <div class="shadow rounded">
          <div class="p-5">
            <b-form-group class="mb-5">
              <b-form-input
                v-model="searchQuery"
                placeholder="Cari nama siswa"
              ></b-form-input>
            </b-form-group>

            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">NIS</th>
                    <th scope="col">NISN</th>
                    <th scope="col">NAMA SISWA</th>
                    <th scope="col">JENIS KELAMIN</th>
                    <th scope="col">KELAS</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">TEMPAT LAHIR</th>
                    <th scope="col">TANGGAL LAHIR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="student in paginatedStudents" :key="student.id">
                    <td>{{ student.nis }}</td>
                    <td>{{ student.nisn }}</td>
                    <td>{{ student.nama_siswa }}</td>
                    <td>{{ student.jns_kelamin }}</td>
                    <td>{{ student.kelas }}</td>
                    <td>{{ student.status }}</td>
                    <td>{{ student.tempat_lahir }}</td>
                    <td>{{ student.tgl_lahir }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>

            <b-modal
              v-if="selectedStudent"
              :title="selectedStudent.nama_siswa"
              @hide="resetSelectedStudent"
            >
              <b-container>
                <b-row>
                  <b-col sm="6">NIS:</b-col>
                  <b-col sm="6">{{ selectedStudent.nis }}</b-col>
                </b-row>
              </b-container>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<style>
.table {
  font-size: 12px;
}
</style>
  
<script>
import NavbarView from "@/components/Navbar.vue";
import FooterView from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "SiswaView",
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      searchQuery: "",
      currentPage: 1, // Menambahkan currentPage untuk menyimpan halaman aktif
      perPage: 10, // Menetapkan jumlah data per halaman menjadi 10
      selectedStudent: null,
      siswa: [],
    };
  },
  created() {
    // Fetch data from db.json when the component is created
    axios
      .get("/db.json")
      .then((response) => {
        this.siswa = response.data.siswa; // Assign fetched data to siswa array
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  computed: {
    filteredStudents() {
      if (!this.searchQuery) return this.siswa;
      const query = this.searchQuery.toLowerCase();
      return this.siswa.filter(
        (student) =>
          student.nis.toLowerCase().includes(query) ||
          student.nama_siswa.toLowerCase().includes(query) ||
          student.jns_kelamin.toLowerCase().includes(query)
      );
    },
    rows() {
      return this.filteredStudents.length; // Menghitung total baris berdasarkan filteredStudents
    },
    paginatedStudents() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.filteredStudents.slice(start, end);
    },
  },
  methods: {
    showDetails(student) {
      this.selectedStudent = student;
    },
    resetSelectedStudent() {
      this.selectedStudent = null;
    },
  },
};
</script>
  