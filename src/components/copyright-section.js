class CopyrightSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <div id="webring-613" class="mb-3"></div>
        <small>Copyright &copy; Salim Dellali Personal Website ${new Date().getFullYear()}</small>
      </div>
    </section>
    `

    if (!document.querySelector('script[src*="613-web-ring"]')) {
      const script = document.createElement('script')
      script.src = 'https://613-web-ring.vercel.app/widget.js'
      script.defer = true
      document.body.appendChild(script)
    }
  }
}

customElements.define('copyright-section', CopyrightSection)
