import Link from '@docusaurus/Link';
import React from 'react';

import styles from './styles.module.scss';

export default function Integration() {
  return (
    <div className={styles.bgColor}>
      <div className="container">
        <div className={styles.headText}>
          <h2>Weaviate and Google Cloud integrations</h2>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.header}>
            <p>
              Whether you’re part of a traditional enterprise with an on-prem
              data footprint or a digital native, Weaviate can meet you where
              you are in your cloud journey.
            </p>
            <p>
              {' '}
              Build scalable enterprise infrastructure for Weaviate using Google
              Cloud’s Virtual Machines (VMs), enabling horizontal scaling and
              High Availability (HA) for clusters. Load data into Weaviate from
              any one of Google’s managed databases or cloud storage services,
              keeping your data contained within your Virtual Private Cloud
              (VPC).
            </p>
            <p>
              {' '}
              Take advantage of Google’s generative AI stack with Weaviate to
              build next-generation AI applications. 
            </p>
          </div>

          <div className={styles.diagram}>
            <video
              width="560"
              height="315"
              controls
              poster="/img/site/Weaviate-Google-Springboard.jpg"
            >
              <source
                src="/img/site/Weaviate-Google-Springboard.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
