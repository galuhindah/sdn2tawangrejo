<template>
  <div>
    <SidebarAdminView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarAdminView from "@/components/SidebarAdmin.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    SidebarAdminView,
  },
});
</script>
