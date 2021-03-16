import React, { useState } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import './styles.scss'
import Particles from 'react-tsparticles';
import TextLoop from "react-text-loop";
import useWindowDimensions from '../../hook/WindowsSize'
import { HashLink as Link } from 'react-router-hash-link';
import pdf from './Luc-Georges-CV.pdf'
import { Link as Links, Element, } from 'react-scroll'
import 'semantic-ui-css/semantic.min.css'


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

    <div className="relative " >

      <nav className="shadow-lg shadow-inner fixed w-full bg-primary z-50 opacity-100" >
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
                {/* Mobile NavBar */}
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Links to="top" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</Links>
                  <Links to="Git" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">GitHub</Links>
                  <Links to="Skill" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Compétences</Links>
                  <Links to="Formation" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Formation</Links>
                  <Links to="Contact" activeClass="bg-purple-700" spy={true} smooth={false} className="cursor-pointer hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Links>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Open ? "block" : "hidden sm:hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1">

            {/* Desktop NavBar */}

            <Links to="top" activeClass="bg-purple-700" spy={true} smooth={false} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Accueil</Links>
            <Links to="Git" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Repos GitHub</Links>
            <Links to="Skill" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Compétences</Links>
            <Links to="Formation" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Formation</Links>
            <Links to="Contact" activeClass="bg-purple-700" spy={true} smooth={false} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Links>
          </div>
        </div>
      </nav>

      <div className=""   >

        <Element className="bg-cover bg-center  z-0 left-0 top-0" style={{ backgroundImage: 'url("header.jpeg")' }} id="top" name="pres">

          {/*********************  Presentation section ****************/}

          <div className="container mx-auto max-w-4xl flex lg:pt-0 pt-44  items-center h-auto lg:h-screen flex-wrap mx-auto mb-32 lg:my-0"  >
            {/*Main Col*/}
            <div data-aos="fade-right" id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-100 z-10 mx-6 lg:mx-0">
              <div className="p-4  text-center lg:text-left">
                {/* Image for mobile view*/}
                <div className="block z-1 lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: 'url("photo.png")' }} />
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">Luc Georges</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" /></svg>Développeur web Javascript Full-stack</p>
                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" /></svg> Thonon-les-bains - France</p>
                <p className="pt-8 text-md">Je m'appelle Luc et je suis développeur web Après plusieurs années passées dans l'hotellerie à travailler dans divers pays, j'ai décidé de me reconvertir dans un domaine qui me passione depuis toujours, le développement web. Etant passioné de code j'ai réalisé au cours de ma vie des projets de petite envergure pour des associations ainsi que des projets perso
                J'ai donc rejoint l'école O'clock pour réaliser une formation de 6 mois au Javascript ce qui m'a permis de consolider mes connaissances ainsi que d'apprendre tout aussi bien le côté front-end que back-end et de réaliser un projet d'un mois en équipe
                                        Je suis aussi passionné de jeux vidéo ainsi que de musique (particulièrement rock et métal).</p>
                <div className="pt-12 pb-8">
                  <div className="bg-primary  text-white font-bold py-2 px-4 text-center rounded-full">
                    Get In Touch
              </div>
                </div>
                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                  <a className="link" target="_blank" href="https://twitter.com/Lucgeorgespro" data-tippy-content="@twitter_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg></a>
                  <a className="link" target="_blank" href="https://github.com/luc-georges/" data-tippy-content="@github_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                  <a className="link" target="_blank" href="mailto:luc.georges.ld@gmail.com" data-tippy-content="@github_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><title>Mail</title><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" /></svg></a>

                </div>

              </div>
            </div>
            {/*Img Col*/}
            <div data-aos="fade-left" className="w-full z-10 lg:w-2/5"  >
              {/* Big profile image for side bar (desktop) */}
              <img src="moi.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />

            </div>

          </div>
        </Element>

        {/*********************  Git section ****************/}

        <div className="relative flex min-h-screen lg:flex-row flex-col py-20" id="Git">
          <div className="absolute bg-no-repeat bg-cover bg-center h-full w-full z-0 left-0 top-0" style={{ backgroundImage: 'url("wall.jpeg")' }}></div>

          <div data-aos="zoom-in-right" className="homepage--main--title--container-git">
            <Image src='gitHub.png' />
          </div>
          <Card.Group centered data-aos="zoom-in-left" className="lg:max-w-1/2">
            {repos.map((element, index) => {
              return (
                <Card className="opacity-90 " key={index} href={element.html_url} target="_blank">
                  <Card.Content  >
                    <Card.Header >{element.name}</Card.Header>
                    {element.name == "MateHub-project" ? <Image src="https://repository-images.githubusercontent.com/337679400/43b2f480-6b96-11eb-8413-d44cc207c7b4" /> : ""}
                    {element.name == "Quizz-app" ? <Image src="https://repository-images.githubusercontent.com/347976696/93238f00-8632-11eb-8b43-356181d8dc15" /> : ""}
                    {element.name == "Portfolio" ? <Image src="https://repository-images.githubusercontent.com/341617759/eb0dc600-8631-11eb-8bb6-da60c75fde39" /> : ""}
                    <Card.Meta className="h-8 " >{element.html_url}</Card.Meta>
                    <Card.Description className="text-black-900 text-md h-auto  ">
                      {element.description}
                    </Card.Description>
                  </Card.Content>

                </Card>
              )
            })}
          </Card.Group>
          <div></div>
        </div>

        {/*********************  Skill section ****************/}

        <div className=" relative bg-no-repeat bg-cover bg-center " style={{ backgroundImage: 'url("skill.jpg")' }} id="Skill">

          <main data-aos="fade-up-left" className="">
            <div className="py-36 ">
              <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-opacity-25  shadow-3xl bg-primary sm:rounded-3xl">
                  <div className="">
                    <div className="p-6 border-b  bg-opacity-50 bg-gray-800  border-gray-700 sm:px-20">

                      <div className="mt-8 text-2xl  text-gray-200"> Mes compétences </div>
                      <div className="  mt-6 text-gray-400">
                        <Image.Group size={widthLogo}>
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
                        </Image.Group></div>
                    </div>
                    <div className="grid grid-cols-1 bg-opacity-50  bg-gray-800 md:grid-cols-2">
                      <div className="">
                        <div className="flex items-center"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-8 h-8 text-gray-400 dark:text-gray-200">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                          </path>
                        </svg>
                          <div className="ml-4 text-lg font-semibold leading-7 text-gray-200">
                            Hard Skill
                      </div>
                        </div>
                        <div className="ml-12">
                          <div className="mt-2 text-md  text-md text-gray-200 text-center">   <ul className="list ">
                            <li className="">HTML 5</li>
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
                          </div>
                        </div>
                      </div>
                      <div className="p-6  border-t border-gray-700 md:border-t-0 md:border-l">
                        <div className="flex items-center"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-8 h-8 text-gray-200">
                          <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                          </path>
                          <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                          <div className="ml-4 text-lg font-semibold leading-7 text-gray-200">
                            Soft Skill
                      </div>
                        </div>
                        <div className="ml-12">
                          <div className="mt-2 text-lg text-gray-200  text-center">  <ul className="list">
                            <li>Esprit d'équipe</li>
                            <li>Curieux</li>
                            <li>Adaptation</li>
                            <li>Relever des défis</li>
                            <li>Empathie</li>
                            <li>Géstion de stress</li>
                          </ul> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/*********************  Formation section ****************/}

        </div>
        <div className="min-h-screen -pt-4 flex flex-col lg:flex-row justify-around content-center  relative bg-no-repeat bg-cover bg-center " style={{ backgroundImage: 'url("school.jpg")' }} id="Formation">
          <div data-aos="zoom-out" className="lg:max-w-1/2 self-center bg-opacity-50 p-4 shadow-xl bg-gray-300 sm:rounded-3xl">
            <span className="text-2xl block pb-8 font-bold">Formation</span>


            <div className="text-sm lg:text-lg">
              <p className="text-sm lg:text-xl">Ecole O'Clock labelisé 'grande école du numérique', formation en téléprésentiel sur la période du 30/03/2020 au 02/09/2020.</p>
              <p className="text-sm lg:text-lg">- 3 mois de socle sur: HTML 5, CSS 3, JvaScript (ES6), Versioning Git / GitHub,  Méthode agile, conception et consommation d'API Rest,Architecture MVC (Data Mapper & Active Record), PostgreSQL.</p>
              <p className="text-sm lg:text-lg">- 1 mois de spécialisation Data sur NodeJS,PostgreSQL, Express, Sqitch, Requêtes CRUD, Expressions régulières (regex), MongoDB, GraphQL, Redis.</p>
              <p className="text-sm lg:text-lg">- 1 mois projet en équipe de 4 avec la méthode AGILE en situation de travail.</p>
              <p className="text-sm lg:text-lg">- Suivis de la spécialisation react React, Redux, Router, ReactDOM, JSX.</p>
              <p className="text-sm lg:text-lg">- Obtention de la certification 'Opquast' sur la maitrise de la qualité en projet web avec un score de 905/1000 (mention 'Expert')  </p>
            </div>
          </div>
          <div data-aos="zoom-in" className="self-center bg-opacity-50 p-4 shadow-xl bg-gray-300 sm:rounded-3xl">
            <Image className=" bg-opacity-50 p-4 shadow-xl bg-gray-300" size="large" src="/logos/oclockandopqast.png"></Image>
          </div>

        </div>

        {/*********************  Footer section ****************/}

        <div className="bg-black" id="Contact">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">Home</div>
              <a className="my-3 block" href="/#top">Accueil <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block" href="/#Git">GitHub <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block" href="/#Skill">Compétences <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block" href="/#Formation">Formation <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block" href="/#Contact">Contact</a>
            </div>

            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">Liens Externes</div>
              <a className="my-3 block" target="_blank" href="https://github.com/luc-georges/">GitHub <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block" target="_blank" href="https://www.linkedin.com/in/luc-georges-dev/">LinkedIn <span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block bg-green-400 text-black rounded-xl p-2 text-center " target="_blank" href={pdf}>Télécharger CV <span className="text-black text-xs p-1" /></a>
            </div>
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">Me contacter</div>
              <a className="my-3 block" href="/#">43 Avenue de senevulaz 74200 Thonon-les-bains, France<span className="text-teal-600 text-xs p-1" /></a><a className="my-3 block" href="/#">luc.georges.ld@gmail.com <span className="text-teal-600 text-xs p-1" /></a>
            </div>
          </div>
        </div>
        <div className="bg-black pt-1 ">
          <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-600 text-sm flex-col
      md:flex-row max-w-6xl">
            <div className="mt-2">© Copyright 2020. All Rights Reserved.</div>
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">

              <a className="link px-2" href="https://twitter.com/Lucgeorgespro" target="_blank" data-tippy-content="@twitter_handle"><svg className="h-6 fill-current text-gray-300 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg></a>
              <a className="link px-2" target="_blank" href="https://github.com/luc-georges/" data-tippy-content="@github_handle"><svg className="h-6 fill-current text-gray-300 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
              <a className="link px-2" target="_blank" href="mailto:luc.georges.ld@gmail.com" data-tippy-content="@github_handle"><svg className="h-6 fill-current text-gray-300 hover:text-green-700" role="img" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><title>Mail</title><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" /></svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Homepage;