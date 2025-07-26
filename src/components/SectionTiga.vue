<template>
  <section class="section-tiga" ref="section" id="projects">
    <div class="container">
      <h2 class="title">Apa yang Kita Lakukan</h2>
      <p class="text">
        Kami menyediakan sumber daya pendidikan dan dukungan untuk anak-anak yang kurang beruntung agar mereka dapat mencapai potensi penuhnya.
      </p>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'SectionTiga',
  mounted() {
    gsap.from(this.$refs.section, {
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    })
  }
}
</script>


