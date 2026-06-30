class LearnMoreModals extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Learn More Modals -->
    <!-- Learn More Modal 1 education -->
    <div
      class="portfolio-modal modal fade"
      id="learnMoreModalEducation"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <!-- Portfolio Modal - Title -->
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                  >
                    Education
                  </h2>
                  <!-- Icon Divider -->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image -->
                  <img
                    class="img-fluid rounded mb-5"
                    src="img/learn-more/education.jpg"
                    alt="education"
                  />
                </div>
              </div>
              <!-- Portfolio Modal - Text -->
              <div class="row justify-content-center">
                <!-- Technology Used -->
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title -->
                  <h4 class="text-secondary mt-2 mb-5 text-center">
                    My Academic Background
                  </h4>
                  <!-- Portfolio Modal - Text - Masters degree -->
                  <div>
                    <h5>
                      Masters Degree in Software Enginnering | Summmer 2017
                    </h5>
                    <h6>
                      University of Science and Technology Houari Boumedienne
                      (USTHB) | Bab-Ezzouar, Algeria
                    </h6>
                    <p>
                      Paired with a class mate, my graduation work consisted of
                      creating a <strong>desktop app</strong> as a piece of a
                      huge software, the work consisted of assessing the
                      requirements of the project, designing the software
                      architecture, developing the app using
                      <strong
                        >Java programming language connected to a Microsoft
                        Access Database</strong
                      >, testing it and finally write the final dissertation.
                    </p>
                    <p><strong>Technology Used :</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:java"
                          data-inline="false"
                        ></span>
                        Java Standard Edition
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-access"
                          data-inline="false"
                        ></span>
                        Microsoft Access Database
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="simple-icons:uml"
                          data-inline="false"
                        ></span>
                        Unified Modeling Language (UML)
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="mdi:microsoft-office"
                          data-inline="false"
                        ></span>
                        Microsoft Office
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <!-- Portfolio Modal - Text - Bachelor degree -->
                  <div class="mb-5">
                    <h5>Bachelor Degree in Computer Science | Summmer 2015</h5>
                    <h6>
                      University of Science and Technology Houari Boumedienne
                      (USTHB) | Bab-Ezzouar, Algeria
                    </h6>
                    <p>
                      Paired with a class mate, my graduation work consisted of
                      creating an <strong>Android mobile app</strong> letting
                      the Smartphone become a remote controller of the mouse and
                      the keyboard of a PC via Bluetooth, I took part in the app
                      design, and I was in charge of writing the final
                      dissertation.
                    </p>
                    <p><strong>Technology Used :</strong></p>
                    <ul class="mb-5 list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="openmoji:android"
                          data-inline="false"
                        ></span>
                        Android
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="material-symbols:bluetooth"
                          data-inline="false"
                        ></span>
                        Bluetooth
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="simple-icons:uml"
                          data-inline="false"
                        ></span>
                        Unified Modeling Language (UML)
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="mdi:microsoft-office"
                          data-inline="false"
                        ></span>
                        Microsoft Office
                      </li>
                    </ul>
                    <p></p>
                  </div>
                </div>
                <!-- What I have learned -->
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <button
                    class="btn btn-secondary"
                    href="#"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn More Modal 2 work -->
    <div
      class="portfolio-modal modal fade"
      id="learnMoreModalWork"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <!-- Portfolio Modal - Title -->
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                  >
                    Work
                  </h2>
                  <!-- Icon Divider -->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-briefcase"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image -->
                  <img
                    class="img-fluid rounded mb-5"
                    src="img/learn-more/work.jpg"
                    alt="work"
                  />
                </div>
              </div>
              <!-- Portfolio Modal - Text -->
              <div class="row justify-content-center">
                <!-- Technology Used -->
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title -->
                  <h4 class="text-secondary mt-2 mb-5 text-center">
                    My Latest Job Experiences
                  </h4>
                  <!-- Portfplio Modal - Text - Full Stack Develloper Foci Solution-->
                  <div class="mb-5">
                    <h5>Fullstack Developer</h5>
                    <h6>
                      Foci Solutions | Remote from Ottawa, Ontario, Canada
                    </h6>
                    <p><strong>June 2025 - Present</strong></p>
                    <p>
                      Foci Solutions (Medium-sized company of 30 employees) is
                      an Ottawa-based software consultancy empowering people to
                      build exceptional software.
                    </p>
                    <p>
                      Being part Foci Solutions,
                      <strong>my main tasks are :</strong>
                    </p>
                    <ul>
                      <li>Deliver technical project implementations</li>
                      <li>Focus on the application of AI</li>
                    </ul>
                    <p><strong>Main Technologies in use :</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:typescript"
                          data-inline="false"
                        ></span>
                        Typescript
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-node"
                          data-inline="false"
                        ></span>
                        Node.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-reactjs"
                          data-inline="false"
                        ></span>
                        React.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:nextjs-icon"
                          data-inline="false"
                        ></span>
                        Next.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="grommet-icons:genaifill"
                          data-inline="false"
                        ></span>
                        Google GenAI API
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="flat-color-icons:linux"
                          data-inline="false"
                        ></span>
                        WSL
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="octicon:copilot-24"
                          data-inline="false"
                        ></span>
                        GitHub Copilot
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:github-icon"
                          data-inline="false"
                        ></span>
                        GitHub
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-vscode"
                          data-inline="false"
                        ></span>
                        VS Code
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <!-- Portfplio Modal - Text - Full Stack Develloper AI Engineer The Standard Quote-->
                  <div class="mb-5">
                    <h5>Fullstack Developer / AI Engineer</h5>
                    <h6>
                      The Standard Quote (Contractor) | Remote from Ottawa,
                      Ontario, Canada
                    </h6>
                    <p><strong>August 2024 - June 2025</strong></p>
                    <p>
                      Everest Restoration Inc. is a leading property restoration
                      company in Canada.
                    </p>
                    <p>
                      I helped Everest Restoration Inc. build the V2 of The
                      Standard Quote, an AI-powered SaaS MVP for the
                      construction and renovation sector, enabling contractors
                      to generate quotes faster.
                    </p>
                    <p>
                      Being a contractor for The Standard Quote,
                      <strong>my main tasks were :</strong>
                    </p>
                    <ul>
                      <li>
                        Initialized the project with Next.js and hosted the Full
                        Stack application on Vercel
                      </li>
                      <li>
                        Integrated a PDF generator to convert created quotes
                        into comprehensive PDFs, including scope of work, images
                        of damaged areas, task pricing, total price, and
                        contractor's contact information
                      </li>
                      <li>
                        Integrated a Speech-to-Text feature using OpenAI's
                        "whisper-1" model for voice input
                      </li>
                      <li>
                        Implemented a Retrieval Augmented Generation (RAG)
                        system with Langchain.js to retrieve task descriptions
                        and steps to achieve the tasks
                      </li>
                      <li>
                        Utilized Supabase for database management,
                        authentication, and image storage
                      </li>
                    </ul>
                    <p><strong>Main Technologies Used :</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:typescript"
                          data-inline="false"
                        ></span>
                        Typescript
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-node"
                          data-inline="false"
                        ></span>
                        Node.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-reactjs"
                          data-inline="false"
                        ></span>
                        React.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:nextjs-icon"
                          data-inline="false"
                        ></span>
                        Next.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-light-shadcn"
                          data-inline="false"
                        ></span>
                        ShadCN UI
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="simple-icons:langchain"
                          data-inline="false"
                        ></span>
                        Langchain.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:supabase"
                          data-inline="false"
                        ></span>
                        Supabase
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:vercel"
                          data-inline="false"
                        ></span>
                        Vercel
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="simple-icons:openai"
                          data-inline="false"
                        ></span>
                        OpenAI API
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="octicon:copilot-24"
                          data-inline="false"
                        ></span>
                        GitHub Copilot
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:github-icon"
                          data-inline="false"
                        ></span>
                        GitHub
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-vscode"
                          data-inline="false"
                        ></span>
                        VS Code
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <!-- Portfolio Modal - Text - Intermediate Backend Javascript Developer Combyne Ag -->
                  <div class="mb-5">
                    <h5>Intermediate Backend Javascript Developer</h5>
                    <h6>
                      Combyne Ag by BAYER | Remote from Ottawa, Ontario, Canada
                    </h6>
                    <p><strong>March 2023 - March 2024</strong></p>
                    <p>
                      Combyne Ag (Medium-sized startup of 30 employees)
                      [Acquired by BAYER], is a crop marketing management app
                      that empowers farmers to make quick and easy grain
                      marketing decisions, with all their information in the
                      palm of their hands.
                    </p>
                    <p>
                      Combyne Connect - product of Combyne - is an API ecosystem
                      that farmers are able to use to connect Combyne to both
                      their farm tools and buyer tools, and to bring their
                      relevant crop marketing data all together in a single
                      place.
                    </p>
                    <p>
                      Being part of Combyne Connect team,
                      <strong>my main tasks were :</strong>
                    </p>
                    <ul>
                      <li>
                        With the help of 2 teammates, build Combyne Connect API
                        from scratch using NestJS framework
                      </li>
                      <li>
                        Write unit, integration and e2e tests using Jest for
                        Combyne Connect API
                      </li>
                      <li>
                        Write Swagger documentation for Combyne Connect API
                      </li>
                      <li>
                        Participate in writing “black box” automated test using
                        Mocha and Chai for Combyne Connect API
                      </li>
                    </ul>
                    <p>
                      While working at Combyne,
                      <strong>the key achievements were:</strong>
                    </p>
                    <ul>
                      <li>
                        Build from scratch and deploy the first version of
                        Combyne Connect API, increasing user engagement by 25%
                        on the main Combyne app
                      </li>
                      <li>
                        Deploying Combyne Connect API attracted corporate
                        interest in Combyne the app, leading to a bulk purchase
                        of 40 individual subscriptions
                      </li>
                    </ul>
                    <p><strong>Main Technologies Used :</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:typescript"
                          data-inline="false"
                        ></span>
                        Typescript
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-node"
                          data-inline="false"
                        ></span>
                        Node.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:nestjs"
                          data-inline="false"
                        ></span>
                        NestJS
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="skill-icons:prisma"
                          data-inline="false"
                        ></span>
                        Prisma
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:aws-cognito"
                          data-inline="false"
                        ></span>
                        AWS Cognito
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:swagger"
                          data-inline="false"
                        ></span>
                        Swagger
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:jest"
                          data-inline="false"
                        ></span>
                        Jest
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:jira"
                          data-inline="false"
                        ></span>
                        Jira
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="carbon:api-1"
                          data-inline="false"
                        ></span>
                        REST API
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:git-icon"
                          data-inline="false"
                        ></span>
                        GIT
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:github-icon"
                          data-inline="false"
                        ></span>
                        GitHub
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-vscode"
                          data-inline="false"
                        ></span>
                        VS Code
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:postman"
                          data-inline="false"
                        ></span>
                        Postman
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <!-- Portfolio Modal - Text - Fullstack Web Developer Yassir -->
                  <div class="mb-5">
                    <h5>Fullstack Web Developer</h5>
                    <h6>YASSIR | Remote from Algiers, Algeria</h6>
                    <p><strong>March 2022 - February 2023</strong></p>
                    <p>
                      YASSIR (Medium-sized startup of +100 employees) is the
                      leading super App for on-demand and payment services in
                      French-Speaking Africa, offers on-demand services such as
                      ride-hailing, last-mile delivery, and financial services
                      to help users pay, save and borrow digitally.
                    </p>
                    <p>
                      Being part of the Shared and Financial Services
                      Engineering Team, <strong>my main tasks were :</strong>
                    </p>
                    <ul>
                      <li>Developing new features and fixing bugs</li>
                      <li>
                        Writing documentation to help new developers integrate
                        quicker into the team
                      </li>
                      <li>
                        Coordinating with the Engineering Manager and Product
                        Managers to agree upon projects' specifications
                      </li>
                      <li>Writing automated tests for the RESTful API</li>
                      <li>
                        Participating in the recruitment process of new
                        developers by technically interviewing them
                      </li>
                    </ul>
                    <p>
                      While working at YASSIR (YC W20),
                      <strong>the key achievements were</strong>
                    </p>
                    <ul>
                      <li>
                        Push the “Referral” project’s advancement status from
                        50% to 80% completion
                      </li>
                      <li>Successfully hire 3 Node.js backend developers</li>
                    </ul>
                    <p><strong>Main Technologes Used :</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:typescript"
                          data-inline="false"
                        ></span>
                        Typescript
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-node"
                          data-inline="false"
                        ></span>
                        Node.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="skill-icons:expressjs-light"
                          data-inline="false"
                        ></span>
                        Express.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="skill-icons:mongodb"
                          data-inline="false"
                        ></span>
                        MongoDB
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:mongoose"
                          data-inline="false"
                        ></span>
                        Mongoose
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:jira"
                          data-inline="false"
                        ></span>
                        Jira
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="carbon:api-1"
                          data-inline="false"
                        ></span>
                        REST API
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:git-icon"
                          data-inline="false"
                        ></span>
                        GIT
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:github-icon"
                          data-inline="false"
                        ></span>
                        GitHub
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-vscode"
                          data-inline="false"
                        ></span>
                        VS Code
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:postman"
                          data-inline="false"
                        ></span>
                        Postman
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <!-- Portfolio Modal - Text - Self-taught MERN Stack Developer -->
                  <div class="mb-5">
                    <h5>Freelance MERN Stack Developer</h5>
                    <h6>SalimDellali.com | Remote</h6>
                    <p><strong>April 2020 - September 2021</strong></p>
                    <p>
                      Upleveling my Web Development skills during the COVID-19
                      pandemic, exploring further JavaScript and learning the
                      MERN Stack through tutorials and side-projects.
                      <br />
                      In order to put into practice my new skills, I have
                      decided to build a conference website, inspired from
                      <b
                        >50 Projects for React and the Static Web Colby Fayock
                        1.0</b
                      >
                      eBook :
                    </p>
                    <ul>
                      <li>This portfolio and personal website</li>
                      <li>
                        Jamstack Website for a Dummy React Conference, Visit
                        website
                        <a
                          href="https://dummy-react-conf-website.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          >here <i class="fas fa-external-link-alt"></i></a
                        >.
                      </li>
                      <li>
                        Dummy React Conference Dashboard, Visit website
                        <a
                          href="https://dummy-react-conf-dashboard.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >here <i class="fas fa-external-link-alt"></i></a
                        >.
                      </li>
                    </ul>
                    <p>I have also built backend projects such as :</p>
                    <ul>
                      <li>
                        Dummy React Conference Server, visit REST API
                        <a
                          href="https://dummy-react-conf-server.onrender.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          >here <i class="fas fa-external-link-alt"></i></a
                        >.
                      </li>
                      <li>
                        Parking Lot Server, visit REST API
                        <a
                          href="https://parking-lot-server.onrender.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          >here <i class="fas fa-external-link-alt"></i></a
                        >.
                      </li>
                      <li>
                        Text Storing & Processing, visit REST API
                        <a
                          href="https://text-storing-processing.onrender.com/text"
                          target="_blank"
                          rel="noopener noreferrer"
                          >here <i class="fas fa-external-link-alt"></i></a
                        >.
                      </li>
                    </ul>
                    <p><strong>Technology Learned :</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:javascript"
                          data-inline="false"
                        ></span>
                        Javascript ES6
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:typescript-icon"
                          data-inline="false"
                        ></span>
                        Typescript
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-jest"
                          data-inline="false"
                        ></span>
                        Jest
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:react"
                          data-inline="false"
                        ></span>
                        React.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:create-react-app"
                          data-inline="false"
                        ></span>
                        Create React App
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:reactrouter"
                          data-inline="false"
                        ></span>
                        React Router
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:redux"
                          data-inline="false"
                        ></span>
                        Redux
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="eva:npm-outline"
                          data-inline="false"
                        ></span>
                        Formik
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="eva:npm-outline"
                          data-inline="false"
                        ></span>
                        Yup
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="simple-icons:axios"
                          data-inline="false"
                        ></span>
                        Axios
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:reactbootstrap"
                          data-inline="false"
                        ></span>
                        React Bootstrap
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="mdi:material-ui"
                          data-inline="false"
                        ></span>
                        Material-UI
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:nodejs-icon"
                          data-inline="false"
                        ></span>
                        Node.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="simple-icons:express"
                          data-inline="false"
                        ></span>
                        Express.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:jwt-icon"
                          data-inline="false"
                        ></span>
                        JSON Web Token
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="carbon:api-1"
                          data-inline="false"
                        ></span>
                        REST API Design
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:postman"
                          data-inline="false"
                        ></span>
                        Postman
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-mongo"
                          data-inline="false"
                        ></span>
                        MongoDB
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="cib:mongodb"
                          data-inline="false"
                        ></span>
                        Mongoose.js
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-mongo"
                          data-inline="false"
                        ></span>
                        MongoDB Atlas
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-light-netlify"
                          data-inline="false"
                        ></span>
                        Netlify
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:heroku-icon"
                          data-inline="false"
                        ></span>
                        Heroku
                      </li>

                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:npm-2"
                          data-inline="false"
                        ></span>
                        Npm
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="devicon:sass"
                          data-inline="false"
                        ></span>
                        Sass
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="skill-icons:gulp"
                          data-inline="false"
                        ></span>
                        Gulp
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:github-icon"
                          data-inline="false"
                        ></span>
                        GitHub
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="vscode-icons:file-type-vscode"
                          data-inline="false"
                        ></span>
                        VS Code
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:webstorm"
                          data-inline="false"
                        ></span>
                        WebStorm
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <!-- Portfolio Modal - Text - Fullstack Web Developer Mediafex -->
                  <div class="mb-5">
                    <h5>Fullstack Web Developer</h5>
                    <h6>
                      MEDIAFEX Communication Consulting and Web Agency |
                      Boumerdes, Algeria
                    </h6>
                    <p><strong>February 2019 - May 2020</strong></p>
                    <p>
                      Médiafex (Small-sized business of 10 employees) is a
                      Communication Consulting and Web Agency founded in 1999 by
                      Mr. Mohamed Boumala, the core activities of Médiafex are
                      graphic design, building search engines about companies,
                      producing advertising objects and corporate gifts,
                      producing advertising signages, and providing internet
                      services such as web development and web hosting.
                    </p>
                    <p>My main tasks were:</p>
                    <ul>
                      <li>
                        Gathering Mr. Boumala’s requirements to build websites
                        and web services
                      </li>
                      <li>
                        Coordinating with a graphic designer to create assets
                        for websites development
                      </li>
                      <li>Developing websites and web services</li>
                      <li>
                        Coordinating with Mr. Boumala and reporting periodically
                        the advancement status of websites and web services
                      </li>
                      <li>
                        Daily news publishing on https://www.annugate.com, owned
                        by Mr. Boumala
                      </li>
                    </ul>
                    <p>The key achievements were:</p>
                    <ul>
                      <li>
                        Build a Website with a complex search in large catalogs
                        for Line-x Algeria (Line-x Algeria being a company of
                        waterproofing, thermal insulation and protective coating
                        solutions and services, owned by Mr. Boumala)
                      </li>
                      <li>
                        Building a presentational Website for exposing MEDIAFEX
                        company and it's services
                      </li>
                    </ul>
                    <p><strong>Main Technologies Used:</strong></p>
                    <ul class="list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:html-5"
                          data-inline="false"
                        ></span>
                        HTML 5
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:css-3"
                          data-inline="false"
                        ></span>
                        CSS 3
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:javascript"
                          data-inline="false"
                        ></span>
                        Javascript
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="zondicons:php-elephant"
                          data-inline="false"
                        ></span>
                        PHP
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:bootstrap"
                          data-inline="false"
                        ></span>
                        Bootstrap
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="cib:jquery"
                          data-inline="false"
                        ></span>
                        jQuery
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:phpstorm"
                          data-inline="false"
                        ></span>
                        PhpStorm IDE
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="cib:cpanel"
                          data-inline="false"
                        ></span>
                        cPanel
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="cib:filezilla"
                          data-inline="false"
                        ></span>
                        Filezilla
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:git-icon"
                          data-inline="false"
                        ></span>
                        GIT
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="logos:bitbucket"
                          data-inline="false"
                        ></span>
                        Bitbucket
                      </li>
                    </ul>
                  </div>
                  <hr />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <button
                    class="btn btn-secondary"
                    href="#"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn More Modal 3 aiesec -->
    <div
      class="portfolio-modal modal fade"
      id="learnMoreModalAiesec"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <!-- Portfolio Modal - Title -->
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                  >
                    AIESEC Experience
                  </h2>
                  <!-- Icon Divider -->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-globe"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image -->
                  <img
                    class="img-fluid rounded mb-5"
                    src="img/learn-more/aiesec.jpg"
                    alt="aiesec"
                  />
                </div>
              </div>
              <!-- Portfolio Modal - Text -->
              <div class="row justify-content-center">
                <!-- Technology Used -->
                <div class="col-lg-8">
                  <div>
                    <p>
                      " AIESEC is an <strong>international</strong> youth-run,
                      non-governmental and not-for-profit organization that
                      provides young people with leadership development,
                      cross-cultural internships, and global volunteer exchange
                      experiences. The organization focuses on
                      <strong
                        >empowering young people to make a Progressive social
                        impact.</strong
                      >
                      " - <i>Wikipedia.</i>
                    </p>
                    <p>
                      Being part of AIESEC in Algeria - Local Committee Benak
                      (Algiers West) contributed tremendously into shaping the
                      person I'm today, AIESEC helped me develop many
                      <strong
                        >soft skills, enlarge my network and work on my
                        Leadership Qualities</strong
                      >
                      such as :
                      <strong
                        >Empowering Others, Solution Oriented mindset, World
                        Citizenship and being more Self Aware.</strong
                      >
                    </p>
                    <p><strong>Position held within AIESEC :</strong></p>
                    <ul class="mb-5 list-unstyled">
                      <li>
                        <span
                          class="iconify"
                          data-icon="bi:person-fill"
                          data-inline="false"
                        ></span>
                        AIESEC <strong>Alumnus</strong> (Currently)
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="bi:person-fill"
                          data-inline="false"
                        ></span>
                        <strong>Executive Board Member</strong> in the Talent
                        Management Department
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="bi:person-fill"
                          data-inline="false"
                        ></span>
                        <strong>AIESEC Products Promoter</strong> in the
                        Business to Customer Department
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="bi:person-fill"
                          data-inline="false"
                        ></span>
                        <strong>Team Leader Tracking</strong> in the Talent
                        Management Department
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="bi:person-fill"
                          data-inline="false"
                        ></span>
                        <strong>Team Member Tracking</strong> in the Talent
                        Management Department
                      </li>
                      <li>
                        <span
                          class="iconify"
                          data-icon="bi:person-fill"
                          data-inline="false"
                        ></span>
                        <strong>Team Member Designer</strong> in the
                        Communication Department
                      </li>
                    </ul>
                    <!-- AIESEC pictures -->
                    <div class="row mb-5">
                      <div class="col-md-12 col-lg-6 mb-4">
                        <img
                          class="img-fluid rounded"
                          src="img/learn-more/aiesec/sdg17.jpg"
                          alt="sdg17"
                        />
                      </div>
                      <div class="col-md-12 col-lg-6 mb-4">
                        <img
                          class="img-fluid rounded"
                          src="img/learn-more/aiesec/conference.jpg"
                          alt="conference"
                        />
                      </div>
                      <div class="col-md-12 col-lg-6 mb-4">
                        <img
                          class="img-fluid rounded"
                          src="img/learn-more/aiesec/googlobal.jpg"
                          alt="googlobal"
                        />
                      </div>
                      <div class="col-md-12 col-lg-6 mb-4">
                        <img
                          class="img-fluid rounded"
                          src="img/learn-more/aiesec/getreal.jpg"
                          alt="getreal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <button
                    class="btn btn-secondary"
                    href="#"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn More Modal 4 hobbies -->
    <div
      class="portfolio-modal modal fade"
      id="learnMoreModalHobbies"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <!-- Portfolio Modal - Title -->
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                  >
                    Hobbies
                  </h2>
                  <!-- Icon Divider -->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-heart"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image -->
                  <img
                    class="img-fluid rounded mb-5"
                    src="img/learn-more/hobbies.jpg"
                    alt="hobbies"
                  />
                </div>
              </div>
              <!-- Portfolio Modal - Text -->
              <div class="row justify-content-center">
                <!-- Technology Used -->
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title -->
                  <h4 class="text-secondary mt-2 mb-5 text-center">
                    What I Like To Do In My Free Time
                  </h4>
                  <!-- Portfolio Modal - Text -->
                  <!-- hobbies pictures -->
                  <div class="row mb-5">
                    <div class="col-md-12 col-lg-6 mb-4">
                      <img
                        class="img-fluid rounded"
                        src="img/learn-more/hobbies/workout.jpg"
                        alt="workout"
                      />
                    </div>
                    <div class="col-md-12 col-lg-6 mb-4">
                      <img
                        class="img-fluid rounded"
                        src="img/learn-more/hobbies/music.jpg"
                        alt="music"
                      />
                    </div>
                    <div class="col-md-12 col-lg-6 mb-4">
                      <img
                        class="img-fluid rounded"
                        src="img/learn-more/hobbies/psychology.jpg"
                        alt="psychology"
                      />
                    </div>
                    <div class="col-md-12 col-lg-6 mb-4">
                      <img
                        class="img-fluid rounded"
                        src="img/learn-more/hobbies/computing.jpg"
                        alt="computing"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <button
                    class="btn btn-secondary"
                    href="#"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Learn More Modal 5 languages -->
    <div
      class="portfolio-modal modal fade"
      id="learnMoreModalLanguages"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="fas fa-times"></i>
            </span>
          </button>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <!-- Portfolio Modal - Title -->
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                  >
                    Languages
                  </h2>
                  <!-- Icon Divider -->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fas fa-language"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <!-- Portfolio Modal - Image -->
                  <img
                    class="img-fluid rounded mb-5"
                    src="img/learn-more/languages.jpg"
                    alt="languages"
                  />
                </div>
              </div>
              <!-- Portfolio Modal - Text -->
              <div class="row justify-content-center">
                <!-- Technology Used -->
                <div class="col-lg-8">
                  <!-- Portfolio Modal - Title -->
                  <div class="text-center mt-2 mb-5">
                    <h4 class="text-secondary">The Languages I Speak</h4>
                    <span class="badge badge-pill badge-primary">Reading</span>
                    <span class="badge badge-pill badge-danger">Writing</span>
                    <span class="badge badge-pill badge-success"
                      >Listening</span
                    >
                    <span class="badge badge-pill badge-secondary"
                      >Speaking</span
                    >
                  </div>

                  <!-- Portfolio Modal - Text - languages -->
                  <div class="row mb-3">
                    <div class="col-lg-3">
                      <h6>
                        <span
                          class="iconify"
                          data-icon="emojione-v1:flag-for-united-states"
                          data-inline="false"
                        ></span>
                        English
                      </h6>
                    </div>
                    <div class="col-lg-9">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          R
                        </div>
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          W
                        </div>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          L
                        </div>
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          S
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-3">
                      <h6>
                        <span
                          class="iconify"
                          data-icon="emojione-v1:flag-for-france"
                          data-inline="false"
                        ></span>
                        French
                      </h6>
                    </div>
                    <div class="col-lg-9">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          R
                        </div>
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          W
                        </div>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          L
                        </div>
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          S
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-3">
                      <h6>
                        <span
                          class="iconify"
                          data-icon="emojione-v1:flag-for-algeria"
                          data-inline="false"
                        ></span>
                        Arabic
                      </h6>
                    </div>
                    <div class="col-lg-9">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          R
                        </div>
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          W
                        </div>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          L
                        </div>
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          S
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-lg-3">
                      <h6>
                        <span
                          class="iconify"
                          data-icon="emojione-v1:flag-for-russia"
                          data-inline="false"
                        ></span>
                        Russian
                      </h6>
                    </div>
                    <div class="col-lg-9">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          R
                        </div>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          L
                        </div>
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          S
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-lg-3">
                      <h6>
                        <span
                          class="iconify"
                          data-icon="emojione-v1:flag-for-ukraine"
                          data-inline="false"
                        ></span>
                        Ukranian
                      </h6>
                    </div>
                    <div class="col-lg-9">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 5%"
                          aria-valuenow="5"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          R
                        </div>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          L
                        </div>
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          style="width: 10%"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          S
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                  <button
                    class="btn btn-secondary"
                    href="#"
                    data-bs-dismiss="modal"
                  >
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('learn-more-modals', LearnMoreModals)
