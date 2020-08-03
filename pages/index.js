import Head from 'next/head'
import Router from 'next/router'

const Home = () => (
  <div className="container">
    <Head>
      <title>3FE 3LE</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap" rel="stylesheet"/> 
    </Head>
    
    <main className="container">

      <h1 className="title">
        Bienvenido a...
      </h1>
      <a className="name" target='_blank' href="https://youtube.com/c/3FE3LE">3FE 3LE</a>
      <p> Hola muchachos!! ¿como estan? como se pueden dar cuenta este es mi sitio web, el cual estare consntruyendo para mas adelante convertirlo en algo un poco mas interesante </p>
    </main>
    <footer>
    </footer>

    

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      .container {
        margin: 5% 5%
      }
      a {
        text-decoration:none;
      }
      p {
        width: 90%
      }
      .title {
        display: flex;
        justify-content: start;
        aling-items: center;
        font-family: 'Lobster', cursive;
      
      }
      .name {
        font-weight: bolder;
        color: black;
        font-size: 100px;

      }
    `}</style>
  </div>
)

export default Home
