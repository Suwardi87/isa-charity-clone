<template>
  <footer class="footer-container">
    <div class="footer-columns">
      <!-- Tentang Kami -->
      <div class="footer-section">
        <h3 class="footer-title">Tentang Kami</h3>
        <p class="footer-text">
          ISA (Indonesian Student Association) adalah organisasi non-profit yang bertujuan untuk membangun rasa kebersamaan dan dukungan di antara pelajar Indonesia di Kanada.
        </p>
      </div>

      <!-- Hubungi Kami -->
      <div class="footer-section">
        <h3 class="footer-title">Hubungi Kami</h3>
        <ul class="footer-list">
          <li class="footer-item">
            <a href="mailto:info@isa.ca" class="footer-link">info@isa.ca</a>
          </li>
          <li class="footer-item">
            <a href="https://www.instagram.com/isa_canada/" class="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li class="footer-item">
            <a href="https://www.facebook.com/isa.canada/" class="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
        </ul>
      </div>

      <!-- Tautan Cepat -->
      <div class="footer-section">
        <h3 class="footer-title">Tautan Cepat</h3>
        <ul class="footer-list">
          <li class="footer-item">
            <router-link :to="{ name: 'Home' }" class="footer-link">Beranda</router-link>
          </li>
          <li class="footer-item">
            <router-link :to="{ name: 'AboutUs' }" class="footer-link">Tentang Kami</router-link>
          </li>
        </ul>
      </div>

      <!-- Buletin -->
      <div class="footer-section">
        <h3 class="footer-title">Buletin</h3>
        <p class="footer-text">
          Tetap terupdate dengan berita dan acara terbaru kami dengan berlangganan buletin kami.
        </p>
        <form class="footer-form" @submit.prevent="subscribeToNewsletter">
          <input
            type="email"
            class="footer-input"
            placeholder="Masukkan alamat email Anda"
            v-model="email"
          />
          <button class="footer-btn" type="submit">Berlangganan</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-text">© 2023 ISA Kanada. Hak cipta dilindungi undang-undang.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribeToNewsletter() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (emailRegex.test(this.email)) {
        console.log(`Berlangganan dengan email: ${this.email}`)
        this.email = ''
      } else {
        alert('Silakan masukkan alamat email yang valid.')
      }
    }
  }
}
</script>
