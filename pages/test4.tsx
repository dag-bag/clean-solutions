import Head from "next/head";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Foo = () => (
  <>
    <Head>
      <link rel="stylesheet" href="startbucks.css" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {/* <header>
      <a href="#">
        <Logo width="26" />
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">What's New</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header> */}
    <Navbar />
    {/* <link rel="stylesheet" href="./style.css" /> */}
    <title>Starbucks Coffee Website Landing Page</title>
    <section>
      <div className="circle" />

      <div className="container">
        <div className="text-box">
          <h2>
            Take Your Own
            <br />
            <span> Adventure Quiz</span>
          </h2>
          <p>
            Use it on hard and soft surfaces, food, plants, animals, skin,
            water, entire rooms, and much more. No organism tested has proven to
            be resilient.
          </p>
          <div className="flex space-x-4">
            <a href={"/"}>learn More</a>
            <a href={"/"} className="!bg-red-400">
              Start Quiz
            </a>
          </div>
        </div>
        <div className="img-box">
          <img src="Assets/img1.png" className="starbucks" alt="" />
        </div>
      </div>
      <ul className="thumb">
        <li>
          <img
            src="Assets/thumb1.png"
            // onclick="imgSlider('img1.png');changeCircleColor('#017143')"
          />
        </li>
        <li>
          <img
            src="Assets/thumb2.png"
            // onclick="imgSlider('img2.png');changeCircleColor('#0eb7495')"
          />
        </li>
        <li>
          <img
            src="Assets/thumb3.png"
            // onclick="imgSlider('img3.png');changeCircleColor('#d752b1')"
          />
        </li>
      </ul>
      <ul className="social">
        <li>
          <a href="#">
            <img src="Assets/facebook.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="Assets/instagram.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="Assets/twitter.png" />
          </a>
        </li>
      </ul>
    </section>
  </>
);

export default Foo;
