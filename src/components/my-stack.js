class MyStack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- My Stack Section -->
    <section class="page-section bg-primary text-white mb-0" id="myStack">
      <div class="container">
        <!-- My Stack Section Heading -->
        <h2 class="page-section-heading text-center text-uppercase text-white">
          My Stack
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Current Stack extra heading -->
        <h4 class="text-uppercase text-center mb-5">
          Current stack of technologies I use
        </h4>

        <!-- Current Stack Section Content -->
        <div class="myStackContainer mb-5">
          <div
            class="huge"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Typescript"
          >
            <span
              class="iconify"
              data-icon="devicon:typescript"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Node.js"
          >
            <span
              class="iconify"
              data-icon="logos:nodejs-icon"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="React.js"
          >
            <span
              class="iconify"
              data-icon="vscode-icons:file-type-reactjs"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Next.js"
          >
            <span
              class="iconify"
              data-icon="logos:nextjs-icon"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Jest"
          >
            <span
              class="iconify"
              data-icon="logos:jest"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="GIT"
          >
            <span
              class="iconify"
              data-icon="logos:git"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Github"
          >
            <span
              class="iconify"
              data-icon="logos:github-icon"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Github Copilot"
          >
            <span
              class="iconify"
              data-icon="octicon:copilot-24"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="VSCode"
          >
            <span
              class="iconify"
              data-icon="logos:visual-studio-code"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="REST API"
          >
            <span
              class="iconify"
              data-icon="carbon:api-1"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Applied AI and Prompt Engineering"
          >
            <span
              class="iconify"
              data-icon="arcticons:openai-chatgpt"
              data-inline="false"
            ></span>
          </div>
          <div
            class="big"
            data-toggle="tooltip"
            data-placement="bottom"
            title="WSL"
          >
            <span
              class="iconify"
              data-icon="flat-color-icons:linux"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Javascript ES6">
            <span
              class="iconify"
              data-icon="logos:javascript"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Express.js">
            <span
              class="iconify"
              data-icon="simple-icons:express"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="NestJS">
            <span
              class="iconify"
              data-icon="logos:nestjs"
              data-inline="false"
            ></span>
          </div>
          <div
            data-toggle="tooltip"
            data-placement="bottom"
            title="Langchain.js"
          >
            <span
              class="iconify"
              data-icon="simple-icons:langchain"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="SQL">
            <span
              class="iconify"
              data-icon="ant-design:console-sql-outlined"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Supabase">
            <span
              class="iconify"
              data-icon="devicon:supabase"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="DrizzleORM">
            <span
              class="iconify"
              data-icon="material-icon-theme:drizzle"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Prisma">
            <span
              class="iconify"
              data-icon="skill-icons:prisma"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="NoSQL">
            <span
              class="iconify"
              data-icon="whh:nosql"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="MongoDB">
            <span
              class="iconify"
              data-icon="vscode-icons:file-type-mongo"
              data-inline="false"
            ></span>
          </div>
          <div
            data-toggle="tooltip"
            data-placement="bottom"
            title="Mongoose.js"
          >
            <span
              class="iconify"
              data-icon="devicon:mongoose"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Swagger">
            <span
              class="iconify"
              data-icon="logos:swagger"
              data-inline="false"
            ></span>
          </div>
          <div
            data-toggle="tooltip"
            data-placement="bottom"
            title="JSON Web Token"
          >
            <span
              class="iconify"
              data-icon="logos:jwt-icon"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Postman">
            <span
              class="iconify"
              data-icon="logos:postman-icon"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Redux">
            <span
              class="iconify"
              data-icon="logos:redux"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Vercel">
            <span
              class="iconify"
              data-icon="devicon:vercel"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Netlify">
            <span
              class="iconify"
              data-icon="vscode-icons:file-type-light-netlify"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="UML">
            <span
              class="iconify"
              data-icon="simple-icons:uml"
              data-inline="false"
            ></span>
          </div>
        </div>

        <!-- Past Stack extra heading -->
        <h4 class="text-uppercase text-center mb-5">
          Past stack of used technologies
        </h4>

        <!-- Past Stack Section Content -->
        <div class="myStackContainer mb-5">
          <div data-toggle="tooltip" data-placement="bottom" title="PHP">
            <span
              class="iconify"
              data-icon="akar-icons:php-fill"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="jQuery">
            <span
              class="iconify"
              data-icon="akar-icons:jquery-fill"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Gulp">
            <span
              class="iconify"
              data-icon="cib:gulp"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Heroku">
            <span
              class="iconify"
              data-icon="simple-icons:heroku"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Wordpress">
            <span
              class="iconify"
              data-icon="bi:wordpress"
              data-inline="false"
            ></span>
          </div>
          <div
            data-toggle="tooltip"
            data-placement="bottom"
            title="WAMP Server"
          >
            <span
              class="iconify"
              data-icon="fluent:server-24-regular"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="PhpStorm">
            <span
              class="iconify"
              data-icon="simple-icons:phpstorm"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="WebStorm">
            <span
              class="iconify"
              data-icon="cib:webstorm"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Filezilla">
            <span
              class="iconify"
              data-icon="cib:filezilla"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="cPanel">
            <span
              class="iconify"
              data-icon="cib:cpanel"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Drupal">
            <span
              class="iconify"
              data-icon="simple-icons:drupal"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Java">
            <span
              class="iconify"
              data-icon="cib:java"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="JBoss">
            <span
              class="iconify"
              data-icon="whh:java"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Oracle">
            <span
              class="iconify"
              data-icon="fontisto:oracle"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="MS Access">
            <span
              class="iconify"
              data-icon="file-icons:microsoft-access"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Eclipse">
            <span
              class="iconify"
              data-icon="cib:eclipseide"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Perl">
            <span
              class="iconify"
              data-icon="simple-icons:perl"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Assembly">
            <span
              class="iconify"
              data-icon="file-icons:assembly-intel"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="C">
            <span
              class="iconify"
              data-icon="simple-icons:c"
              data-inline="false"
            ></span>
          </div>
          <div data-toggle="tooltip" data-placement="bottom" title="Pascal">
            <span class="iconify" data-icon="ps:pc" data-inline="false"></span>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

customElements.define('my-stack', MyStack)
