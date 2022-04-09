import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hulu from "../../public/images/hulu.png";
import Spotify from "../../public/images/spotify.png";
import Instagram from "../../public/images/instagram.png";
import Portfolio from "../../public/images/portfolio.png";

function Project() {
  return (
    <div className="h-auto" id="project">
      <div className="title space-x-2">
        <h1 className="text-red-600 mt-24">My</h1>
        <h1 className="mt-24">Projects</h1>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 m-12">
            <div className="">
              <div className="project">
                <Image
                  src={Instagram}
                  layout="responsive"
                  alt="Instagram"
                  width={1920}
                  height={1200}
                  className="rounded-md shadow-lg"
                />
              </div>
              <div className="project-info">
                <h1>Title:</h1>
                <h1>Instagram Clone</h1>
              </div>
              <Link href="https://leeroy-kiplagat-instagramclone.vercel.app">
                <a className="ml-4">Link to Instagram clone</a>
              </Link>
            </div>
            <div>
              <div className="project">
                <Image
                  src={Spotify}
                  layout="responsive"
                  alt="Instagram"
                  width={1920}
                  height={1200}
                  className="rounded-md shadow-lg"
                />
              </div>
              <div className="project-info">
                <h1 className="">Title:</h1>
                <h1>Spotify Clone</h1>
              </div>
              <Link href="https://leeroy-kiplagat-spotify.vercel.app">
                <a className="ml-4">Link to Spotify clone</a>
              </Link>
            </div>
            <div>
              <div className="project">
                <Image
                  src={Hulu}
                  layout="responsive"
                  alt="hulu"
                  width={1920}
                  height={1200}
                  className="rounded-md shadow-lg mt-2"
                />
              </div>
              <div className="project-info">
                <h1>Title:</h1>
                <h1>Hulu Clone</h1>
              </div>
              <Link href="https://hulu-clone-delta-umber.vercel.app" >
                <a className="ml-4">
                  Link to Hulu clone
                </a>
              </Link>
            </div>
            <div>
              <div className="project">
                <Image
                  src={Portfolio}
                  layout="responsive"
                  alt="Portfolio"
                  width={1920}
                  height={1200}
                  className="rounded-md shadow-lg mt-2 ease-in-out"
                />
              </div>
              <div className="project-info">
                <h1>Title:</h1>
                <h1>Portfolio Website</h1>
              </div>
              <a href="" className="ml-4">
                Git repo of Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
