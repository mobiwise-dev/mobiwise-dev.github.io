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
      <header className="headerIndex" style={{ textAlign: "center", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="/img/mobiwise.svg" alt="MOBIWISE" style={{ height: "25vh", filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.8))" }} />
      </header>
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