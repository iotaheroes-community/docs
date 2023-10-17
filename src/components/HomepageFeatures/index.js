import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explore Fortuvia',
    Svg: require('@site/static/img/advSectionCropped.png').default,
    description: (
      <>
        Delve into the magical world of Fortuvia, home to brave heroes, fearsome monsters, and endless quests.
      </>
    ),
  },
  {
    title: 'Play & Earn',
    Svg: require('@site/static/img/Trading.png').default,
    description: (
      <>
        Own, train, and adventure with your heroes. Trade and craft unique items, while earning rewards on your journey.
      </>
    ),
  },
  {
    title: 'Built on Blockchain',
    Svg: require('@site/static/img/char.png').default,
    description: (
      <>
        Leverage the power of blockchain. Own tokenized assets and trade freely in a player-driven economy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
