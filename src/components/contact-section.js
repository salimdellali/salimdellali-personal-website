class ContactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Contact Section -->
    <section class="page-section" id="contact">
      <div class="container">
        <!-- Contact Section Heading -->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          Contact Me
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Contact extra heading -->
        <h4 class="text-uppercase text-center text-secondary mb-5">
          Have a freelance project or job opportunity ? Leave me a message
        </h4>

        <!-- Contact Section Form -->
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form
              method="POST"
              name="sentMessage"
              id="contactForm"
              novalidate="novalidate"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="sentMessage" />
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Name</label>
                  <input
                    class="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Email Address</label>
                  <input
                    class="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 py-2"
                >
                  <div class="g-recaptcha" data-sitekey="6LdnkKEqAAAAAPvyqoRAmjXxvE6evlb5z-5Ol90Y"></div>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-xl"
                  id="sendMessageButton"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    `

    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/api.js'
      script.async = true
      document.head.appendChild(script)
    }
  }
}

customElements.define('contact-section', ContactSection)
