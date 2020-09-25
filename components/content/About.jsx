import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Fade, makeStyles, Slide } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(237, 136, 54, 0.249)',
  }
}));

const About = () => {

  const classes = useStyles();

  const [showSection, setShowSection] = useState(false)

  const [showDetails, setShowDetails] = useState(false)

  const [showPrincipal, setShowPrincipal] = useState(false)

  const [expanded, setExpanded] = React.useState(false);

  const questions = [
    {
      title: '¿Quien soy yo?',
      subtitle: 'DEVELOPER - You tuber',
      content: 'Soy desarrollador de frontend desde 2018,Algunas de mis fortalezas son que soy muy cauteloso y atento a los detalles, pues al final son estos pequeños detalles los que le dan valor agregado a mi trabajo, soy Tecnológico en Análisis y Desarrollo de Sistemas de Información, recientemente trabajé como Desarrollador Frontend en Nativapps donde realizo aplicaciones PWA y SAP en Proyectos de Empresa Ahora busco estabilidad financiera y para ello he desarrollado mis habilidades hasta el punto de considerarme un talento que agrega valor en el equipo de trabajo que me encuentro'
    },
    {
      title: '¿Quien soy yo?',
      subtitle: 'DEVELOPER - You tuber',
      content: 'Soy desarrollador de frontend desde 2018,Algunas de mis fortalezas son que soy muy cauteloso y atento a los detalles, pues al final son estos pequeños detalles los que le dan valor agregado a mi trabajo, soy Tecnológico en Análisis y Desarrollo de Sistemas de Información, recientemente trabajé como Desarrollador Frontend en Nativapps donde realizo aplicaciones PWA y SAP en Proyectos de Empresa Ahora busco estabilidad financiera y para ello he desarrollado mis habilidades hasta el punto de considerarme un talento que agrega valor en el equipo de trabajo que me encuentro'
    },
    {
      title: '¿Quien soy yo?',
      subtitle: 'DEVELOPER - You tuber',
      content: 'Soy desarrollador de frontend desde 2018,Algunas de mis fortalezas son que soy muy cauteloso y atento a los detalles, pues al final son estos pequeños detalles los que le dan valor agregado a mi trabajo, soy Tecnológico en Análisis y Desarrollo de Sistemas de Información, recientemente trabajé como Desarrollador Frontend en Nativapps donde realizo aplicaciones PWA y SAP en Proyectos de Empresa Ahora busco estabilidad financiera y para ello he desarrollado mis habilidades hasta el punto de considerarme un talento que agrega valor en el equipo de trabajo que me encuentro'
    },
    {
      title: '¿Quien soy yo?',
      subtitle: 'DEVELOPER - You tuber',
      content: 'Soy desarrollador de frontend desde 2018,Algunas de mis fortalezas son que soy muy cauteloso y atento a los detalles, pues al final son estos pequeños detalles los que le dan valor agregado a mi trabajo, soy Tecnológico en Análisis y Desarrollo de Sistemas de Información, recientemente trabajé como Desarrollador Frontend en Nativapps donde realizo aplicaciones PWA y SAP en Proyectos de Empresa Ahora busco estabilidad financiera y para ello he desarrollado mis habilidades hasta el punto de considerarme un talento que agrega valor en el equipo de trabajo que me encuentro'
    },
    {
      title: '¿Quien soy yo?',
      subtitle: 'DEVELOPER - You tuber',
      content: 'Soy desarrollador de frontend desde 2018,Algunas de mis fortalezas son que soy muy cauteloso y atento a los detalles, pues al final son estos pequeños detalles los que le dan valor agregado a mi trabajo, soy Tecnológico en Análisis y Desarrollo de Sistemas de Información, recientemente trabajé como Desarrollador Frontend en Nativapps donde realizo aplicaciones PWA y SAP en Proyectos de Empresa Ahora busco estabilidad financiera y para ello he desarrollado mis habilidades hasta el punto de considerarme un talento que agrega valor en el equipo de trabajo que me encuentro'
    },
  ]

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickSection = () => {

    setShowSection(!showSection);

    showPrincipal === false ? null : setShowPrincipal(true);
  }

  const handleClickDetails = () => {

    showPrincipal ? setShowPrincipal(!showPrincipal) : setShowDetails(!showDetails)

    setTimeout(() => {
      showDetails ? setShowPrincipal(!showPrincipal) : setShowDetails(!showDetails)
    }, 1030);
  }

  return (
    <>
      <div onClick={() => handleClickSection()} className="w-full bg-white row-span-2 md:row-span-2 shadow-inner sm:transition duration-500 ease-in-out transform sm:hover:-translate-x-2 cursor-pointer sm:hover:translate-y-1 sm:hover:scale-105 ">
        <div className="animate-pulse h-12 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
          <h1 className="font-black  text-white text-2xl">Acerca de Mi</h1>
        </div>
        <div className="h-full flex justify-center">
          <img src="/about-me.svg" alt="me" className="object-cover sm:animate-scale-in-tr" />
        </div>
      </div>
      <Fade in={showSection} timeout={{ appear: 30000, enter: 1000, exit: 800 }}>
        <div className={`fixed top-0 z-10 right-0 left-0 bottom-0  bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 bg-opacity-75 w-screen h-screen p${showDetails ? 't' : 'b'}-12 px-4 font-black text-2xl`}>
          <div className="w-full h-full relative" >
            <svg onClick={() => handleClickSection()} className="w-12 h-12 text-red-100 fixed top-1/12 right-1/12 cursor-pointer z-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            {showPrincipal ?
              (
                <Slide direction="down" in={!showDetails} timeout={1800}>
                  <svg onClick={() => handleClickDetails()} className="w-12 h-12 text-red-100 fixed left-1/2 bottom-0 -ml-6 cursor-pointer animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </Slide>
              ) :
              (
                <Slide direction="up" in={!showPrincipal} timeout={1800}>
                  <svg onClick={() => handleClickDetails()} className="w-12 h-12 text-red-100 fixed left-1/2 top-0 -ml-6 cursor-pointer animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </Slide>
              )}
            <Slide direction="down" in={showPrincipal} unmountOnExit mountOnEnter timeout={{ enter: 1000, exit: 1000 }}>
              <div className="w-full h-full z-30 shadow-md bg-gradient-to-r from-orange-500 to-transparent rounded-b-lg px-8 py-4">
                <div className="md:w-5/12">
                  <h1 className="text-red-100 text-6xl sm:text-8xl" >Acerca de</h1>
                  <h5 className="text-yellow-200 -mt-16 sm:-mt-24 text-8xl sm:text-12xl text-right" >Mi...</h5>
                </div>
                <p className="text-white sm:w-8/12 font-semibold sm:text-2xl text-shadow" >Soy un simple mortal uniendo dos de sus mas grandes facetas para dar conocer mensajes <span className="absolute -mt-4 -mx-16 text-red-500 lobster animate-pulse">You tuber</span> mientras crea soluciones a personas <span className="absolute -mt-4 -mx-16 text-teal-300 uppercase museo animate-text-flicker-in-glow">Developer</span>, y no se confundan, no soy altruista, simplemente me sube el ego saber que ayudo a personas, me siento mejor con cosas como esa en mi conciencia</p>
              </div>
            </Slide>
            <Slide direction="up" in={showDetails} unmountOnExit mountOnEnter timeout={{ enter: 1000, exit: 1000 }}>
              <div className="w-full h-full z-30 shadow-md bg-gradient-to-r from-orange-500 to-transparent rounded-t-lg px-4 py-1">
                {questions.map((question, i) => (
                  <Accordion key={i} className={classes} classes={classes} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                    <AccordionSummary
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <div className="flex justify-between items-center w-full">
                        <h1 className="text-lg sm:text-2xl text-white font-black text-shadow" >{question.title}</h1>
                        <h1 className="text-xs sm:text-xl text-white font-thin " >{question.subtitle}</h1>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text-white text-shadow font-thin text-base sm:text-lg">
                        {question.content}
                      </p>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Slide>
            <img src="/about-me.svg" alt="me" className="bg-opacity-0 w-8/12 fixed right-0 -z-10 bottom-1/12 " />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default About
