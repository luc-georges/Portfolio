import React, { useState } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import './styles.scss'
import Particles from 'react-tsparticles';
import TextLoop from "react-text-loop";
import useWindowDimensions from '../../hook/WindowsSize'
import { HashLink as Link } from 'react-router-hash-link';
import pdf from './Luc-Georges-CV.pdf'
import { Link as Links, Element, } from 'react-scroll'



const Homepage = ({ repos }) => {
  //Hook state for mobile opening / close menu
  const [Open, setOpen] = useState(false);

  //Get viewport size
  const { heightW, widthW } = useWindowDimensions();
  //Particles for particlesJS
  let numberOfParticles;
  //Size for Logos
  let widthLogo
  //Size < 720
  if (widthW < 720) {
    numberOfParticles = 8
    widthLogo = "mini"
  }
  //between 720 and 1560
  else if (widthW > 720 && widthW < 1560) {
    numberOfParticles = 18
    widthLogo = "tiny"
  }
  //from 1560 to +++
  else {
    numberOfParticles = 25
    widthLogo = "small"
  }
  return (

    <div className="homepage" id="top">
      <Link to="/#top">
        <div className="hoverArrow--top--container">
          <span className="up"></span>
        </div>
      </Link>
      <nav className="shadow-lg shadow-inner fixed w-full bg-primary z-50">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-12">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={() => { setOpen(!Open) }} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className={Open ? 'hidden  h-6 w-6' : 'block  h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={Open ? 'block  h-6 w-6' : 'hidden  h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                <span className="text-gray-100">Mon Portfolio</span>

              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Links to="top" activeClass="bg-purple-700" spy={true} smooth={true} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</Links>
                  <Links to="Presentation" activeClass="bg-purple-700" spy={true} smooth={true} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Présentation</Links>
                  <Links to="Git" activeClass="bg-purple-700" spy={true} smooth={true} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">GitHub</Links>
                  <Links to="Skill" activeClass="bg-purple-700" spy={true} smooth={true} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Compétences</Links>
                  <Links to="Formation" activeClass="bg-purple-700" spy={true} smooth={true} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Formation</Links>
                  <Links to="Contact" activeClass="bg-purple-700" spy={true} smooth={true} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Links>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className={Open ? "block" : "hidden sm:hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1">

            <Links to="top" activeClass="bg-purple-700" spy={true} smooth={true} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</Links>
            <Links to="Presentation" activeClass="bg-purple-700" spy={true} smooth={true} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Présentation</Links>
            <Links to="Git" activeClass="bg-purple-700" spy={true} smooth={true} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Repos GitHub</Links>
            <Links to="Skill" activeClass="bg-purple-700" spy={true} smooth={true} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Compétences</Links>
            <Links to="Formation" activeClass="bg-purple-700" spy={true} smooth={true} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Formation</Links>
            <Links to="Contact" activeClass="bg-purple-700" spy={true} smooth={true} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Links>
          </div>
        </div>
      </nav>

      <div className="homepage--main"  >
        <div className="homepage-title--container">
          <h1 className="homepage-title">Developpeur Web {" "}
            <TextLoop>
              <span>Javascript</span>
              <span>NodeJS</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>React</span>
              <span>Redux</span>
            </TextLoop>
          </h1>
        </div>
        <div className="homepage--main--section">

          <div className="particles">
            <Particles
              id="tsparticles"
              options={{
                detectRetina: true,
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onDiv: {
                      elementId: "repulse-div",
                      enable: false,
                      mode: "repulse"
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 1,
                      size: 60,
                      speed: 3
                    },
                    connect: {
                      distance: 80,
                      lineLinked: {
                        opacity: 0.5
                      },
                      radius: 60
                    },
                    grab: {
                      distance: 400,
                      lineLinked: {
                        opacity: 1
                      }
                    },

                    remove: {
                      quantity: 2
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4
                    }
                  }
                },
                particles: {
                  color: {
                    value: "#ffffff"
                  },
                  lineLinked: {
                    blink: false,
                    color: "#000",
                    consent: false,
                    distance: 150,
                    enable: false,
                    opacity: 0,
                    width: 0
                  },
                  rotate: {
                    value: 0,
                    random: true,
                    direction: "clockwise",
                    animation: {
                      enable: true,
                      speed: 5,
                      sync: false
                    }
                  },
                  move: {
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    },
                    bounce: true,
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 2,
                    straight: false
                  },
                  number: {
                    density: {
                      enable: false,
                      area: 1200
                    },
                    limit: 0,
                    value: numberOfParticles
                  },
                  opacity: {
                    animation: {
                      enable: true,
                      minimumValue: 0,
                      speed: 1,
                      sync: false
                    },
                    random: false,
                    value: 0.8
                  },
                  shape: {
                    type: "image",
                    options: {
                      image: [
                        {
                          height: 64,
                          src: "/logos/logo_CSS3.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_HTML5.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_JavaScript.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_JavaScript.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_Git.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_MongoDB.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_React.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_sass.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/logo_Postgresql.svg",
                          width: 64,
                        },
                        {
                          height: 64,
                          src: "logos/npm.svg",
                          width: 64,
                        },
                      ],
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    stroke: {
                      color: "#000000",
                      width: 0
                    },

                  },
                  size: {
                    animation: {
                      enable: true,
                      minimumValue: 20,
                      speed: 10,
                      sync: false
                    },
                    random: false,
                    value: 30
                  }
                },
                polygon: {
                  draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                  },
                  move: {
                    radius: 10
                  },
                  scale: 1,
                  type: "none",
                  url: ""
                }
              }}
            />
          </div>

          <div className="homepage--main--header-container">

            <div className="homepage--main--header-container-name shadow-inner">
              Luc GEORGES
              Développeur Web Fullstack Javascript
              </div>
            <div className="homepage--main--header-container-desc shadow-inner">
              Portfolio développeur Web et applications
              </div>


          </div>
          <Link to="/#Presentation">
            <div className="hoverArrow--container">
              <span className="down"></span>
            </div>
          </Link>
          <Element name="pres">
            <div className="homepage--main--pres-container1 " id="Presentation">
              <div data-aos="flip-left" className="photo-container">

                <Image className="photo" src="/photo.png" />
              </div>
              <div data-aos="flip-left" className="homepage--main--pres-title-content ">
                <span className="homepage--main--pres-title2 ">Présentation</span>
                <span className="homepage--main--pres-title-line"></span>

                <div className="homepage--main--pres--desc-container2">
                  <p className="homepage--main--pres--desc-content2">Bienvenue sur mon Portfolio</p>
                  <p className="homepage--main--pres--desc-content2">Je m'appelle Luc et je suis développeur web</p>
                  <p className="homepage--main--pres--desc-content2">Après plusieurs années passées dans l'hotellerie à travailler dans divers pays, j'ai décidé de me reconvertir dans un domaine qui me passione depuis toujours, le développement web. </p>
                  <p className="homepage--main--pres--desc-content2">Etant passioné de code j'ai réalisé au cours de ma vie des projets de petite envergure pour des associations ainsi que des projets perso</p>
                  <p className="homepage--main--pres--desc-content2">J'ai donc rejoint l'école O'clock pour réaliser une formation de 6 mois au Javascript ce qui m'a permis de consolider mes connaissances ainsi que d'apprendre tout aussi bien le côté front-end que back-end et de réaliser un projet d'un mois en équipe</p>
                  <p className="homepage--main--pres--desc-content2">Je suis aussi passionné de jeux vidéo ainsi que de musique (particulièrement rock et métal)</p>
                </div>
              </div>


              <Link to="/#Git">
                <div className="hoverArrow--container">
                  <span className="down"></span>
                </div>
              </Link>
            </div>
          </Element>
          <div className="homepage--main--git" id="Git">
            <div data-aos="zoom-in-right" className="homepage--main--title--container-git">
              <span className="homepage--main--title">Projet GitHub</span>
            </div>
            <Card.Group data-aos="zoom-in-left" centered className="homepage--main--cards">
              {repos.map((element, index) => {
                return (
                  <Card className="homepage--main--card" fluid key={index} href={element.html_url} target="_blank">
                    <Card.Content  >
                      <Card.Header >{element.name}</Card.Header>
                      <Card.Meta >{element.html_url}</Card.Meta>
                      <Card.Description>
                        {element.description}
                      </Card.Description>
                    </Card.Content>

                  </Card>
                )
              })}

            </Card.Group>
            <Link to="/#Skill">
              <div className="hoverArrow--container">
                <span className="down"></span>
              </div>
            </Link>
          </div>
          <div className="homepage--main--skill-container" id="Skill">
            <div data-aos="flip-up" className="homepage--main--skill-image-content">
              <Image.Group fluid size={widthLogo}>
                <Image src='/logos/logo_HTML5.svg' />
                <Image src='/logos/logo_CSS3.svg' />
                <Image src='/logos/logo_bootstrap.svg' />
                <Image src='/logos/logo_composer_source.svg' />
                <Image src='/logos/logo_JavaScript.svg' />
                <Image src='/logos/logo_Postgresql.svg' />
                <Image src='/logos/logo_npm.svg' />
                <Image src='/logos/logo_React.svg' />
                <Image src='/logos/logo_sass.svg' />
                <Image src='/logos/logo_Git.svg' />
                <Image src='/logos/logo_redux.svg' />
                <Image src='/logos/Node.js_logo.svg' />
                <Image src='/logos/expressjs-ar21.svg' />
                <Image src='/logos/sequelize-logo-9A5075DB9F-seeklogo.com.png' />

              </Image.Group>
            </div>


            <div data-aos="flip-down" className="homepage--main--skill--desc-container">
              <span className="homepage--main--pres-title">Compétences<span className="homepage--main--pres-title-line"></span></span>
              <div className="homepage--main--skill--desc-container-ul" >
                <h3 className="homepage--main--skill--desc-container-ul-title">Hard Skill</h3>
                <ul className="list">
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Sass</li>
                  <li>JavaScript (ES6)</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Sequelize</li>
                  <li>Git</li>
                  <li>React / Redux</li>
                  <li>Architecture Web</li>
                  <li>Accessibility (opquast certified)</li>

                </ul>
                <h3 className="homepage--main--skill--desc-container-ul-title">Soft Skill</h3>
                <ul className="list">
                  <li>Esprit d'équipe</li>
                  <li>Curieux</li>
                  <li>Adaptation</li>
                  <li>Relever des défis</li>
                  <li>Empathie</li>
                  <li>Géstion de stress</li>
                </ul>
              </div>
            </div>


            <Link to="/#Formation">
              <div className="hoverArrow--container">
                <span className="down"></span>
              </div>
            </Link>
          </div>
          <div className="homepage--main--pres-container" id="Formation">
            <div data-aos="zoom-in-up" className="homepage--main--pres-title-content">
              <span className="homepage--main--pres-title">Formation</span>
              <span className="homepage--main--pres-title-line"></span>

              <div className="homepage--main--pres--desc-container">
                <p className="homepage--main--pres--desc-content">Ecole O'Clock labelisé 'grande école du numérique', formation en téléprésentiel sur la période du 30/03/2020 au 02/09/2020.</p>
                <p className="homepage--main--pres--desc-content">- 3 mois de socle sur: HTML 5, CSS 3, JvaScript (ES6), Versioning Git / GitHub,  Méthode agile, conception et consommation d'API Rest,Architecture MVC (Data Mapper & Active Record), PostgreSQL.</p>
                <p className="homepage--main--pres--desc-content">- 1 mois de spécialisation Data sur NodeJS,PostgreSQL, Express, Sqitch, Requêtes CRUD, Expressions régulières (regex), MongoDB, GraphQL, Redis.</p>
                <p className="homepage--main--pres--desc-content">- 1 mois projet en équipe de 4 avec la méthode AGILE en situation de travail.</p>
                <p className="homepage--main--pres--desc-content">Suivis de la spécialisation react React, Redux, Router, ReactDOM, JSX.</p>
                <p className="homepage--main--pres--desc-content">- Obtention de la certification 'Opquast' sur la maitrise de la qualité en projet web avec un score de 905/1000 (mention 'Expert')  </p>
              </div>
            </div>
            <Image centered size="tiny" src="/logos/badge_expert.svg"></Image>


            <Link to="/#Contact">
              <div className="hoverArrow--container">
                <span className="down"></span>
              </div>
            </Link>
          </div>


          <div className="homepage--main--pres--contact-container" id="Contact">
            <div className="homepage--main--pres-title-content">
              <span className="homepage--main--pres-title-contact" >Contact</span>
              <span className="homepage--main--pres-title-line"></span>
            </div>
            <a className="contact-link" href={pdf} target="_blank">
              <Icon color="black" className="icon" name="download" size="huge"></Icon>
              <p className="icon-content">Télécharger mon CV</p>
              <p className="icon-content-sub">(ouverture dans un nouvel onglet)</p>
            </a>

            <a className="contact-link" href="mailto:luc.georges.ld@gmail.com" target="_blank" rel="noopener noreferrer">
              <Icon color="red" name="mail" size="huge"></Icon>
              <p className="icon-content">Me contacter par e-mail</p>
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/luc-georges-dev/" target="_blank">
              <Icon color="blue" name="linkedin" size="huge"></Icon>
              <p className="icon-content">Mon profil Linkedin</p>
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}
export default Homepage;