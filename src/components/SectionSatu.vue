<template>
  <section class="about-hero" ref="section" id="beranda">
    <div class="container">
      <h1 class="title">Tentang ISA</h1>
      <p class="subtitle">
        Kami adalah organisasi non-profit yang berfokus pada membangun masa depan yang lebih baik bagi anak-anak yang kurang beruntung melalui pendidikan dan dukungan komunitas.
      </p>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'SectionSatu',
  mounted() {
    gsap.from(this.$refs.section, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })
  }
}
</script>


