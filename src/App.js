import "./style.scss";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Me from "./ProjectsPhotos/myPhotos/Me.png";
import CalculatorSelect from "./ProjectsPhotos/Calculator-Netafim/TheChosenCalculatorPicture.png";
import EcommerceOne from "./ProjectsPhotos/Ecommerce/theChosenEcommercePicture.png";
import VehicleHatzerimPic from "./ProjectsPhotos/Vehicle-Hatzerim/TheChosenVehicleHatzerimPicture.png";
import PlanetWars from "./ProjectsPhotos/Planet-Wars/PlanetWars.png";
import SpaceInvaders from "./ProjectsPhotos/Space-Invaders/TheGameBetter.png";
import ReactIcon from "./ProjectsPhotos/icons/logoreacticon.png";
import HerokuIcon from "./ProjectsPhotos/icons/download.png";
import ExpressIcon from "./ProjectsPhotos/icons/expressicon.png";
import PostgressIcon from "./ProjectsPhotos/icons/postgressicon.png";
import ScssIcon from "./ProjectsPhotos/icons/Scss.svg";
import myLogo from "./ProjectsPhotos/myPhotos/Logo.png";
// import SpaceInvaders from "";

function App() {
  return (
    <div>
      <header>
        <nav className="dark-green-background" bg="success" variant="dark">
          <a href="mailto:nanarov123@gmail.com?subject=Job&body=Hi Maxim, We've seen your portfolio and we'd liked to discussed with you!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
          </a>
          <a href="tel:058-559-9369">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/maxim-nanarov-565862240/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a href="https://github.com/maxim-nanarov">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </nav>
        <div className="top-div">
          <h1>Maxim Nanarov</h1>
          <img
            className="MyPic"
            src={Me}
            alt="testing"
            height={250}
            width={250}
          />
          <p>
            As an aspiring web developer, you'll be impressed with my portfolio
            showcasing my projects and technical skills. My dedication to
            utilizing my tools to their fullest potential is evident in the
            demonstrations you'll find here. I invite you to take a closer look
            and explore the possibilities of what I can create. If you're
            interested in collaborating or simply want to reach out, you'll find
            my contact information prominently displayed at the top of the page.
            I'm eager to hear from you and explore new opportunities.
          </p>
        </div>
      </header>
      <div>
        <div className="The-Show">
          <div className="cutted">
            <img alt="Calculator " src={CalculatorSelect}></img>
          </div>
          <div className="Explenation">
            <p>
              <h3>The Calculator Project</h3>
              While working at Netafim, I was presented with an exciting
              opportunity to showcase my abilities as a software developer. I
              was tasked with creating a comprehensive Windows application
              designed to calculate the pressure and flow rate of tubes equipped
              with drippers. This project required a strong understanding of
              complex calculations and the ability to translate them into a
              functional program. I am confident in my ability to deliver a
              solution that exceeded expectations and demonstrated my technical
              prowess.
            </p>
          </div>
        </div>
        <div className="The-Show-two">
          <div className="Explenation">
            <p>
              <h3>My First Ecommerce</h3>
              After leaving the army, I enrolled in Scale-Up's Cyber4s course to
              jumpstart my high-tech career. Within just 2 months, I
              successfully created my first ecommerce project despite no prior
              experience. This achievement showcases the impact of the course
              and my determination to succeed.
            </p>
          </div>
          <div className="cutted">
            <img alt="Ecommerce " src={EcommerceOne}></img>
          </div>
        </div>
        <div className="Seperator">
          <div className="cutted">
            <img src={myLogo}></img>
          </div>
          <div className="Explination">
            <h3>About Me</h3>
            <p>
              My time in the army taught me the invaluable lesson that "teamwork
              makes the dream work." I experienced firsthand the difference that
              can be made when individuals work together towards a common goal,
              even under challenging conditions. This realization has stayed
              with me and continues to guide me in all areas of my life. I
              believe that by working together, we can accomplish far more than
              we could ever achieve alone, and this is why I place a strong
              emphasis on teamwork. Whether in personal or professional
              settings, I strive to collaborate and bring people together in
              order to achieve the best possible outcomes.
            </p>
          </div>
        </div>
        <div className="Vehicle-Hatzerim">
          <img alt="Vehicle-Hatzerim " src={VehicleHatzerimPic}></img>
          <h1>Vehicle Hatzerim</h1>
          <p>
            Vehicle Hatzerim was a challenging and exciting project I took on as
            part of my coursework. The app was designed to streamline
            coordination and scheduling for a fleet of over 120 vehicles among a
            community of 700 members. Despite the complexity of the task, I was
            determined to bring this project to life and continued working on it
            even after the course ended.
            <br></br> In this project I Practiced with these technologies:
            <br></br>
          </p>
          <div className="Banner">
            <img src={ReactIcon} alt="React" />{" "}
            <label className="React-Label">React</label>
          </div>
          <div className="Banner">
            <img src={ScssIcon} alt="Scss" />{" "}
            <label className="Scss-Label">Scss</label>
          </div>
          <div className="Banner">
            <img src={ExpressIcon} alt="Express" />{" "}
            <label className="Express-Label">Express</label>
          </div>
          <div className="Banner">
            <img src={PostgressIcon} alt="postgress" />{" "}
            <label className="Postgress-Label">postgress</label>
          </div>
          <div className="Banner">
            <img src={HerokuIcon} alt="heroku" />{" "}
            <label className="Heroku-Label">Heroku</label>
          </div>
          <p>
            <br></br>
            As I was on the hunt for employment opportunities, I took it upon
            myself to start working on a project voluntarily. I wanted to
            challenge myself and see what I was capable of tackling on my own.
            This project was not assigned to me by anyone from the kibbutz,
            rather it was a personal initiative driven by my own ambition and
            desire to showcase my skills. By taking on this project, I
            demonstrated my initiative, drive, and determination to continuously
            improve and learn. I believe this experience has been a valuable
            addition to my portfolio and has set me apart from other job
            seekers.
            <br></br>
            <br></br>
            My first experience with a large-scale project was both exciting and
            challenging. I was eager to take on the challenge and saw it as an
            opportunity to enhance my skills and gain valuable experience in
            cutting-edge technologies. My goal was to create a new and improved
            service, rather than relying on outdated solutions. Despite my best
            efforts, I was unable to complete the project due to my acceptance
            of a job at Netafim. Nevertheless, I view this experience as a
            valuable learning opportunity and am grateful for the skills and
            knowledge I gained through my work on the project.
          </p>
        </div>
      </div>
      <div className="Python-Projects">
        <div className="Specific-Project-Div">
          <img alt="Planet Wars" src={PlanetWars}></img>
          <h3>Planet Wars</h3>
          <p>
            During the course, I had the opportunity to participate in a
            hackathon at Pangeya. The event was structured as a competition
            among groups of three, with the goal of creating the most
            intelligent AI solution. Our team was determined and put in a lot of
            effort, but despite our hard work, we were ultimately bested by
            another group who had unexpectedly created a winning solution in
            just three minutes. Although we didn't win, I viewed the experience
            as a valuable learning opportunity and a fun challenge. I
            appreciated the opportunity to collaborate with my team and push my
            skills to the limit, and I came away with a newfound appreciation
            for the power and potential of AI.
          </p>
        </div>
        <div className="Specific-Project-Div">
          <img alt="Space Invaders" src={SpaceInvaders}></img>
          <h3>Space Invaders</h3>
          <p>
            During the course, we were assigned a project to develop a game
            using Python. Our instructors provided us with the challenge of
            creating the classic game, Space Invaders. This project gave us a
            chance to showcase our Python skills and bring a timeless game to
            life. The process was both fun and educational, as we were able to
            apply what we had learned in the course to a real-world scenario.
            The end result was a completed game that we could add to our
            portfolios, and an enjoyable and rewarding experience.
          </p>
        </div>
      </div>
      <footer className="footer-style">
        <div>
          <div></div>
          <div className="testing">
            <Navbar.Brand href="#home">
              Nanarov123@gmail.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </Navbar.Brand>
            <Navbar.Brand href="#home">
              058-5599369
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com/in/maxim-nanarov-565862240/">
              My Linkedin Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Navbar.Brand>
            <Navbar.Brand href="https://github.com/maxim-nanarov">
              My GitHub Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Navbar.Brand>
          </div>
        </div>
        <h5>Maxim Nanarov</h5>
      </footer>
    </div>
  );
}

export default App;
