import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("about");

  const contents = [
    {
      title: "",
      content: "",
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
        className="content__button content__button--logo"
        src="/logo.svg"
        alt=""
      />
      <button className="content__button content__button--text content__button--text--about">
        About
      </button>
      <button className="content__button content__button--text content__button--text--contact">
        Contact
      </button>
      <button className="content__button content__button--text content__button--text--developer">
        Frontend Developer
      </button>
      <div className="content">
        <h3 className="content__h3">I'm </h3>
        <div className="content__name">
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
      <div></div>
      <div></div>
    </>
  );
}
