import Head from "next/head";

import About from "../components/mypages/About";
import Contact from "../components/mypages/Contact";
import HomePage from "../components/mypages/HomePage";
import Project from "../components/mypages/Project";
import Services from "../components/mypages/Services";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leeroy Kiplagat | in Working Progress</title>
        <meta name="description" content="Working Progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" max-h-max">
        {/** Home Content*/}
        <NavBar />
        <HomePage />

        {/** About */}
        <About />

        {/** Services */}
        <Services />

        {/** Projects */}
        <Project />

        {/** Contact */}
        <Contact />

        {/** Footer */}
      </div>
    </div>
  );
}
