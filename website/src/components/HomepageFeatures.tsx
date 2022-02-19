import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Works on your favorite Database",
    image: "/img/undraw_with_love_re_1q3m.svg",
    description: <>MongoDB, PostgresSQL, MariaDB and more</>,
  },
  {
    title: "Extremely  Flexible",
    image: "/img/undraw_control_panel_re_y3ar.svg",
    description: (
      <>
        Change columns data by masking, scrambling, replacing with a similar
        fake input or a constant. Anything goes.
      </>
    ),
  },
  {
    title: "CLI, API and Configuration",
    image: "/img/undraw_programmer_re_owql.svg",
    description: (
      <>
        Run as a single command, import as an API (Typescript) and use a saved
        configuration file.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
