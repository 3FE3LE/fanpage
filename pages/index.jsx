import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const initialContent = { title: "", content: "", expand: false, side: 'r' };

  const [content, setContent] = useState(initialContent);

  const contents = [
    {
      title: "Frontend Developer",
      content: "copy&paste",
      expand: true,
      side: "l",
    },
    {
      title: "About me",
      content: "copy&paste",
      expand: true,
      side: "r",
    },
    {
      title: "Contact",
      content: "copy&paste",
      expand: true,
      side: "l",
    },
  ];

  const [name, setName] = useState("4@! (");

  const [lastName, setLastName] = useState("8'9!@");

  setTimeout(() => {
    setLastName("ICONA");
    setName("RANK");
  }, 3500);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>3FE 3LE</title>
      </Head>
      <img
        onClick={() => setContent(initialContent)}
        className="content__button content__button--logo"
        src="/logo.png"
        alt=""
      />
      <button
        onClick={() => setContent(contents[0])}
        className="content__button content__button--text content__button--text--developer"
      >
        Frontend Developer
      </button>
      <button
        onClick={() => setContent(contents[1])}
        className="content__button content__button--text content__button--text--about"
      >
        About
      </button>
      <button
        onClick={() => setContent(contents[2])}
        className="content__button content__button--text content__button--text--contact"
      >
        Contact
      </button>
      <div className="content">
        <div
          className={`content__info--${
            content.expand && content.side == 'r' ? "with-content" : "without-content"
          }`}
        >
          <h1>{content.side=="r"?content.title:""}</h1>
          <div>{content.side=="r"?content.content:""}</div>
        </div>
        <div className="content__title">
          <h3 className="content__title--h3">I'm </h3>
          <div className="content__title--name">
            <div className="name">
              <h1 className="">
                3FE <span>{name}</span>
              </h1>
            </div>
            <div className="name">
              <h1 className="">
                3LE <span>{lastName}</span>
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`content__info--${
            content.expand && content.side == 'l' ? "with-content" : "without-content"
          }`}
          >
          <h1>{content.side=="l"?content.title:""}</h1>
          <div>{content.side=="l"?content.content:""}</div>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
}
