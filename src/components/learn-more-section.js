class LearnMoreSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Learn More Section -->
    <section
      class="page-section portfolio bg-primary text-white mb-0"
      id="learnMore"
    >
      <div class="container">
        <!-- Learn More Section Heading -->
        <h2 class="page-section-heading text-center text-uppercase text-white">
          Learn More
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-plus-circle"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Learn more extra heading -->
        <h4 class="text-uppercase text-center mb-5">
          Learn More About the Experiences That Shaped Me
        </h4>

        <!-- Learn More Grid Items -->
        <div class="row justify-content-center">
          <!-- Learn More Item 1 Education -->
          <div class="col-md-4 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#learnMoreModalEducation"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-eye fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/learn-more/education.jpg"
                alt="education"
              />
            </div>
          </div>

          <!-- Learn More Item 2 Work -->
          <div class="col-md-4 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#learnMoreModalWork"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-eye fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/learn-more/work.jpg" alt="work" />
            </div>
          </div>

          <!-- Learn More Item 3 AIESEC Experience -->
          <div class="col-md-4 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#learnMoreModalAiesec"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-eye fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/learn-more/aiesec.jpg"
                alt="aiesec experience"
              />
            </div>
          </div>

          <!-- Learn More Item 4 Hobbies -->
          <div class="col-md-4 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#learnMoreModalHobbies"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-eye fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/learn-more/hobbies.jpg"
                alt="hobbies"
              />
            </div>
          </div>

          <!-- Learn More Item 5 Languages -->
          <div class="col-md-4 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#learnMoreModalLanguages"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-eye fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/learn-more/languages.jpg"
                alt="languages"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

customElements.define('learn-more-section', LearnMoreSection)
