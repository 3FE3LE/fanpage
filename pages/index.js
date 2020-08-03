import Head from 'next/head'
import Router from 'next/router'

const Home = () => (
  <div className="container">
    <Head>
      <title>3FE 3LE</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap" rel="stylesheet"/> 
    <script src="//widget.manychat.com/526791781180406.js" async="async"></script>
    <script src="https://apis.google.com/js/platform.js"></script>

    </Head>
    
    <main className="container">

      <h1 className="title">
        Bienvenido a...
      </h1>
      <a className="name" target='_blank' href="https://youtube.com/c/3FE3LE">3FE 3LE</a>
      <p> Hola muchachos!! ¿como estan? como se pueden dar cuenta este es mi sitio web, el cual estare consntruyendo para mas adelante convertirlo en algo un poco mas interesante </p>
    </main>
    <footer>
    <div class="g-ytsubscribe" data-channelid="UCwn45BHeO1qu7PSHqM3H7SQ" data-layout="full" data-count="hidden"></div>
    <div className="mcwidget-embed" data-widget-id="12266129"></div>
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
        margin: 3% 3%
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
        font-weight: bold;
        color: black;

        font-size: 150px;
        font-family: 'MuseoModerno', cursive;

      }
    `}</style>
  </div>
)

export default Home
