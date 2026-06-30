class PortfolioSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Portfolio Section -->
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <!-- Portfolio Section Heading -->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          Portfolio
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Portfolio Backend Projects extra heading -->
        <h4 class="text-uppercase text-center text-secondary mb-5">
          Backend Projects
        </h4>

        <!-- Portfolio Backend Projects Grid Items -->
        <div class="row">
          <!-- Portfolio Item mini twitter rest api backend server -->
          <div class="col-md-4 col-lg-4 ml-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalMiniTwitterRestApiBackendServer"
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
                src="img/portfolio/mini-twitter-backend.png"
                alt="text storing and processing"
              />
            </div>
          </div>

          <!-- Portfolio Item text storing processing -->
          <div class="col-md-4 col-lg-4 mr-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalTextStoringProcessing"
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
                src="img/portfolio/text-storing-processing.png"
                alt="text storing and processing"
              />
            </div>
          </div>
        </div>
        <!-- /.row -->

        <div class="row mb-5">
          <!-- Portfolio Item text storing processing -->
          <div class="col-md-4 col-lg-4 ml-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalParkingLotServer"
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
                src="img/portfolio/parking-lot-server.jpg"
                alt="parking lot server"
              />
            </div>
          </div>

          <!-- Portfolio Item dummy react conf server -->
          <div class="col-md-4 col-lg-4 mr-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalDummyReactConfServer"
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
                src="img/portfolio/dummy-react-conf-server.png"
                alt="dummy react conf website"
              />
            </div>
          </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Frontend Projects extra heading -->
        <h4 class="text-uppercase text-center text-secondary mb-5">
          Frontend Projects
        </h4>

        <!-- Portfolio Frontend Projects Grid Items -->
        <div class="row">
          <!-- Portfolio Item dummy react conf dashboard -->
          <div class="col-md-4 col-lg-4 ml-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalDummyReactConfDashboard"
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
                src="img/portfolio/dummy-react-conf-dashboard.png"
                alt="dummy react conf website"
              />
            </div>
          </div>

          <!-- Portfolio Item dummy react conf website -->
          <div class="col-md-4 col-lg-4 mr-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalDummyReactConfWebsite"
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
                src="img/portfolio/dummy-react-conf-website.png"
                alt="dummy react conf website"
              />
            </div>
          </div>
        </div>
        <!-- /.row -->

        <div class="row mb-5">
          <!-- Portfolio Item salim dellali -->
          <div class="col-md-4 col-lg-4 ml-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalSalimDellali"
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
                src="img/portfolio/salimdellali.png"
                alt="salim dellali personal website"
              />
            </div>
          </div>

          <!-- Portfolio Item mediafex -->
          <div class="col-md-4 col-lg-4 mr-auto">
            <div
              class="portfolio-item border"
              data-toggle="modal"
              data-target="#portfolioModalMediafex"
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
                src="img/portfolio/mediafex.PNG"
                alt="mediafex"
              />
            </div>
          </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Fullstack Projects extra heading -->
        <h4 class="text-uppercase text-center text-secondary mb-5">
          Fullstack projects
        </h4>

        <!-- Portfolio Fullstack Projects Grid Items -->
        <div class="row mb-5">
          <!-- Portfolio Item linex algeria -->
          <div class="col-md-4 col-lg-4 mx-auto">
            <div
              class="portfolio-item mx-auto border"
              data-toggle="modal"
              data-target="#portfolioModalLinexAlgeria"
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
                src="img/portfolio/linexalgeria.PNG"
                alt="linex algeria"
              />
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
    </section>
    `
  }
}

customElements.define('portfolio-section', PortfolioSection)
