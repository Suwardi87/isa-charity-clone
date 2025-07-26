<template>
  <div>
    <HeaderComponent />
    <SectionSatu />
    <SectionDua />
    <SectionTiga />
    <SectionEmpat />
    <SectionLima />
    <footer class="footer">
      <div class="container">
        <p>&copy; 2023 ISA Charity. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SectionSatu from '@/components/SectionSatu.vue'
import SectionDua from '@/components/SectionDua.vue'
import SectionTiga from '@/components/SectionTiga.vue'
import SectionEmpat from '@/components/SectionEmpat.vue'
import SectionLima from '@/components/SectionLima.vue'
export default {
  name: 'AboutUs',
  components: {
    HeaderComponent,
    SectionSatu,
    SectionDua,
    SectionTiga,
    SectionEmpat,
    SectionLima
  }
}
</script>
