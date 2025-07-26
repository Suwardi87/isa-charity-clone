<template>
  <section class="section-empat" ref="section" id="testimoni">
    <div class="container">
      <h2 class="title">Apa Kata Mereka</h2>
      <div class="testimonials">
        <blockquote class="quote">
          <p>"ISA telah memberikan saya kesempatan untuk belajar dan berkembang. Saya sangat bersyukur menjadi bagian dari komunitas ini."</p>
          <footer>- Dinda, Penerima Beasiswa</footer>
        </blockquote>
        <blockquote class="quote">
          <p>"Melalui ISA, saya bisa ikut serta membantu anak-anak di daerah terpencil mendapatkan akses pendidikan."</p>
          <footer>- Rafi, Relawan</footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'SectionEmpat',
  mounted() {
    gsap.from(this.$refs.section, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power2.out'
    })
  }
}
</script>


