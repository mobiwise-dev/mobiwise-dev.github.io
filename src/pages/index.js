import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

import { useEffect } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // useEffect(() => {
    //   document.body.classList.add("index");
    //   return () => {
    //     document.body.classList.remove("index");
    //   };
    // }, []),
    <>
      {/* <div className="noise_container">
        <div className="noise"></div>
      </div> */}
      <header
        className="headerIndex"
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/img/mobiwise.svg"
          alt="MOBIWISE"
          style={{
            height: "25vh",
            filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.8))",
          }}
        />
        <div className="buttons" style={{ marginTop: "7vh" }}>
          <Link className="button button--outline button--secondary button--lg" to={"extensions"}>
            MobiWise Extensions
          </Link>
        </div>
      </header>

      <section className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <h1 style={{ textAlign: "center" }}>About {siteConfig.title}</h1>
        <p style={{ textAlign: "center" }}>
          MobiWise brings together several projects and know-how around{" "}
          <a href="https://mobirise.com" target="_blank">
            <b>Mobirise</b>
          </a>{" "}
          software.
        </p>
        <p style={{ textAlign: "center" }}>
          <b>Extensions, plugins, blocks, addons, snippets...</b>
        </p>
      </section>

      <section className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <h1 style={{ textAlign: "center" }}>What is Mobirise ?</h1>
        <p style={{ textAlign: "center" }}>
          Mobirise is a <b>free</b> offline app <b>for Window and Mac</b> to easily create small/medium websites, landing pages, online resumes and portfolios, promo sites for apps, events, services and products.
        </p>
      </section>

      <section className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <h1 style={{ textAlign: "center" }}>Do you work with Mobirise team ?</h1>
        <p style={{ textAlign: "center" }}>
          It is important to note all <b>MobiWise projects</b> are independent and is not affiliated with Mobirise in any way. The creator, MobiWise, is not affiliated with the Mobirise team and is simply an enthusiastic user of the platform who wants to help the community by providing a central location for Mobirise resources.
        </p>
      </section>

      <section className="container" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <h1 style={{ textAlign: "center" }}>Why make a donation ?</h1>
        <p style={{ textAlign: "center" }}>I have created this projects and website for Mobirise to help you create even more powerful and attractive websites. My goal is to provide you with quality tools to enhance your experience with Mobirise. </p>
        <p style={{ textAlign: "center" }}>I am working on this projects in my spare time, out of my passion for creating websites and developing innovative solutions. </p>
        <p style={{ textAlign: "center" }}>However, maintaining, hosting, domain name,... comes at a cost. If you like the blocks and extensions I propose, and if you want to support my work and contribute to the sustainability of this project, I invite you to make a donation. Each contribution, even modest, is precious and will allow me to continue to develop new features, to correct bugs and to ensure compatibility with future versions of Mobirise. </p>
        <p style={{ textAlign: "center" }}>I sincerely thank you for your support and I hope you will continue to enjoy the blocks and extensions I provide for Mobirise. If you have any questions or suggestions, please feel free to contact me.</p>
      </section>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
