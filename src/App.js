import "./style.scss";
// import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Me from "./ProjectsPhotos/myPhotos/Me.png";
import CalculatorSelect from "./ProjectsPhotos/Calculator-Netafim/TheChosenCalculatorPicture.png";
import EcommerceOne from "./ProjectsPhotos/Ecommerce/theChosenEcommercePicture.png";
import VehicleHatzerimPic from "./ProjectsPhotos/Vehicle-Hatzerim/TheChosenVehicleHatzerimPicture.png";
import PlanetWars from "./ProjectsPhotos/Planet-Wars/PlanetWars.png";
import SpaceInvaders from "./ProjectsPhotos/Space-Invaders/TheGameBetter.png";
import logo from "./ProjectsPhotos/myPhotos/Logo.png";
// import SpaceInvaders from "";

function App() {
  return (
    <div>
      <header>
        <Navbar className="dark-green-background" bg="success" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
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
            <Navbar.Brand>Maxim Nanarov</Navbar.Brand>
          </Container>
        </Navbar>
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
            A starting web developer who uses his tools to the max! <br></br> In
            this Protfolio, you'll see demonstrations from the projects I have
            made. <br></br> If you'd like to contact me all of my details are at
            the top of the page
          </p>
        </div>
      </header>
      <div>
        <div className="The-Show">
          <div className="cutted">
            <img alt="Calculator Photo" src={CalculatorSelect}></img>
          </div>
          <div className="Explenation">
            <p>
              <h3>The Calculator Project</h3>
              At the Time I worked in Netafim,I was given the task of creating a
              windows application<br></br>
              which it's purpose is to calculate the pressure and flow rate
              <br></br>
              of a tube with drippers in it.<br></br>
            </p>
          </div>
        </div>
        <div className="The-Show-two">
          <div className="Explenation">
            <p>
              <h3>My First Ecommerce</h3>
              After I enlisted from the army, I wanted to join to a course that
              will help me find my first job in the high-tech industry. I found
              a course from scale-up and it's name was Cyber4s. After only two
              month's in, with no experience in this world I created this
              ecommerce Right here.
            </p>
          </div>
          <div className="cutted">
            <img alt="Ecommerce Photo" src={EcommerceOne}></img>
          </div>
        </div>
        <div className="Seperator">
          <h3>About Me</h3>
          <p>
            As I served in the army, there was a saying that "One can get to his
            destination fast, but many will reach far as one could never dream"
            I learned taht team work can make the dreamwork by working hard with
            people in the most unbelivable conditions that there is.<br></br>
            And of course, if I can, I'm working with as many people as I can
            even today, I see teamwork as a MUST for achiving the best results
            that we can get.
          </p>
        </div>
        <div className="Vehicle-Hatzerim">
          <img alt="Vehicle-Hatzerim Picture" src={VehicleHatzerimPic}></img>
          <h1>Vehicle Hatzerim</h1>
          <p>
            Vehicle Hatzerim - An app that will help to coorolate with 700
            members that need to use a fleet of vehicles that is assembled from
            ~120 vehicles.<br></br> Vehicle Hatzerim was my last project in the
            course which I continued while seeking for a job.<br></br>
            <br></br> In this project I Practiced with these technologies:
            <br></br>
            React <br></br>scss <br></br>express <br></br>postgress <br></br>
            heroku<br></br>
            <br></br>
            for the first time in order to become the best at these
            technologies.<br></br>I wanted to make a newer service for one we
            allready had. Unfortunatly, I couldnt finish it because I allready
            started to work in Netafim.
          </p>
        </div>
      </div>
      <div className="Python-Projects">
        <div className="Specific-Project-Div">
          <img src={PlanetWars}></img>
          <h3>Planet Wars</h3>
          <p>
            Once in the middle of the course that I did, We Visisted Pagyea, one
            of the thing we did there was a hackaton. In the hackaton we
            splitted up for groups of three people, and in order to win we
            needed to created the smartest AI. We absolutly gave a hard time to
            every opponent we had, and had a good time, but alas we lost to
            someone who worked 3 minutes on his ai and didnt expected to win.
          </p>
        </div>
        <div className="Specific-Project-Div">
          <img src={SpaceInvaders}></img>
          <h3>Space Invaders</h3>
          <p>
            One of Our projects in the course we needed to make a game in
            python. So we made space invaders, what better use of a good weekend
            if not creating a legandary game ourselves.
          </p>
        </div>
      </div>
      <footer className="footer-style">
        <div>
          <div>Last Updated: 31/01/2023</div>
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
