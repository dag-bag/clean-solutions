import Head from "next/head";
import Home from "../components/_test/Components/Home";

function App() {
  return (
    <div className="App">
      <Head>
        <link rel="stylesheet" href="app.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
      {/* <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
