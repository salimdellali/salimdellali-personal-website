class CopyrightSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; Salim Dellali Personal Website ${new Date().getFullYear()}</small>
      </div>
    </section>
    `
  }
}

customElements.define('copyright-section', CopyrightSection)
