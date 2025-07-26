<template>
  <section class="section-lima" ref="section" id="gabung">
    <div class="container">
      <h2 class="title">Gabung Bersama Kami</h2>
      <p class="text">
        Jadilah bagian dari perubahan. Dengan dukungan Anda, kami dapat menjangkau lebih banyak anak dan memberikan mereka masa depan yang lebih baik.
      </p>
      <div class="cta-buttons">
        <a href="#kontak" class="btn">Hubungi Kami</a>
        <a href="#donasi" class="btn btn-secondary">Donasi Sekarang</a>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'SectionLima',
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


