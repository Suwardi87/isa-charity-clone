<template>
  <section class="section-dua" ref="section" id="about">
    <div class="container">
      <h2 class="title">Misi Kami</h2>
      <p class="text">
        Kami berupaya menyediakan lingkungan yang aman dan mendukung bagi anak-anak yang kurang beruntung untuk belajar dan tumbuh.
      </p>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'SectionDua',
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

