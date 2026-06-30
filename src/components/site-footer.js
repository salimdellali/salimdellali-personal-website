class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Footer -->
    <footer class="footer text-center">
      <div class="container justify-content-between">
        <div class="row">
          <!-- Footer heading -->
          <div class="col-12">
            <h2 class="text-uppercase mb-4">Find Me Around the Web</h2>
          </div>

          <!-- Footer Social Icons -->
          <div class="col-sm-6">
            <h6>Here I Hangout</h6>
            <a
              class="btn btn-outline-light btn-social mx-1 mb-4"
              target="_blank"
              href="https://www.facebook.com/dellali.salim"
              rel="noopener noreferrer"
            >
              <i class="fab fa-fw fa-facebook-f"></i>
            </a>
            <h6>Here I'm Being Professional</h6>
            <a
              class="btn btn-outline-light btn-social mx-1 mb-4"
              target="_blank"
              href="https://twitter.com/DellaliSalim"
              rel="noopener noreferrer"
            >
              <i class="fab fa-fw fa-twitter"></i>
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1 mb-4"
              target="_blank"
              href="https://www.linkedin.com/in/dellalisalim/"
              rel="noopener noreferrer"
            >
              <i class="fab fa-fw fa-linkedin-in"></i>
            </a>
            <h6>Here I Build & Improve</h6>
            <a
              class="btn btn-outline-light btn-social mx-1 mb-4"
              target="_blank"
              href="https://github.com/salimdellali"
              rel="noopener noreferrer"
            >
              <i class="fab fa-fw fa-github"></i>
            </a>
            <a
              class="btn btn-outline-light btn-social mx-1 mb-4"
              target="_blank"
              href="https://www.codewars.com/users/salimdellali"
              rel="noopener noreferrer"
            >
              <i
                class="iconify"
                data-icon="cib:codewars"
                data-inline="false"
              ></i>
            </a>
          </div>

          <!-- Footer image -->
          <div
            class="col-sm-6 d-flex align-items-center justify-content-center"
          >
            <img
              class="masthead-avatar"
              src="img/airplane-cropped.png"
              alt="salim dellali on a paper airplane"
            />
          </div>
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('site-footer', SiteFooter)
