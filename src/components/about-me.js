class AboutMe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- About Me Section -->
    <section class="page-section portfolio" id="aboutMe">
      <div class="container">
        <!-- About Me Section Heading -->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          About
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-user"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- About me extra heading -->
        <h4 class="text-uppercase text-center text-secondary mb-5">
          About me in a nutshell
        </h4>

        <!-- About Section Content -->
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-header text-center"><h2><span class="iconify" data-icon="iconoir:developer" data-inline="false" style="font-size: 1.2em;"></span></h2></div>
              <div class="card-body text-secondary text-center">
                <p class="card-text lead">
                  Developer by passion and profession
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-header text-center"><h2><span class="iconify" data-icon="streamline-ultimate-color:laptop" data-inline="false" style="font-size: 1.2em;"></span></h2></div>
              <div class="card-body text-secondary text-center">
                <p class="card-text lead">
                  Always in the look out for development best case practices
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-header text-center"><h2><span class="iconify" data-icon="streamline-plump-color:script-2" data-inline="false" style="font-size: 1.2em;"></span></h2></div>
              <div class="card-body text-secondary text-center">
                <p class="card-text lead">
                  Lifelong Javascript/Typescript student
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-header text-center"><h2><span class="iconify" data-icon="icon-park:robot-one" data-inline="false" style="font-size: 1.2em;"></span></h2></div>
              <div class="card-body text-secondary text-center">
                <p class="card-text lead">
                  Leveraging Claude Code & Spec-Driven Development
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-header text-center"><h2><span class="iconify" data-icon="streamline-emojis:rocket" data-inline="false" style="font-size: 1.2em;"></span></h2></div>
              <div class="card-body text-secondary text-center">
                <p class="card-text lead">
                  Aiming to become a Software Architect
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-header text-center"><h2><span class="iconify" data-icon="noto:pizza" data-inline="false" style="font-size: 1.2em;"></span></h2></div>
              <div class="card-body text-secondary text-center">
                <p class="card-text lead">Big Pizza Fan!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

customElements.define('about-me', AboutMe)
