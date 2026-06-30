class SiteMasthead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Masthead -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-md-end mb-4">
            <img
              class="masthead-avatar"
              src="img/fullnobgcropped.png"
              alt="salim dellali full"
            />
          </div>
          <div class="col-md-8">
            <!-- Masthead Heading -->
            <h1 class="masthead-heading text-uppercase mb-0">Salim Dellali</h1>

            <!-- Icon Divider -->
            <div class="divider-custom divider-light">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>

            <!-- Masthead Subheading -->
            <h3 class="masthead-subheading fw-light mb-0 mt-4">
              Software Engineer &<br />
              Fullstack Typescript<br />
              Web Developer
            </h3>

            <!-- Icon Divider -->
            <div class="divider-custom divider-light">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-chevron-down"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>

            <div class="row justify-content-center">
              <div class="text-center">
                <a
                  class="btn btn-outline-light js-scroll-trigger"
                  href="#contact"
                >
                  <i class="far fa-handshake me-2"></i>
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    `
  }
}

customElements.define('site-masthead', SiteMasthead)
