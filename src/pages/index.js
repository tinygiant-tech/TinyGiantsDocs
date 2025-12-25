import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <header className="heroBanner_custom">
      <img
        src="img/home-page/home-page-wide.png"
        alt="TinyGiants"
        className="heroImage_wide"
      />
      <div className="heroMask" />
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="TinyGiants - Professional Unity Tools & Innovative Games">
      <HomepageHeader />

      <main style={{ backgroundColor: '#020202', paddingTop: '10px' }}>
        <div className="container">

          <section className="project-grid">

            <Link to="/docs/game-event-system/intro/overview" className="project-card">
              <div className="project-card-img-wrapper">
                <img src="img/home-page/game-event-system-logo.png" className="project-card-img" alt="Game Event System" />
              </div>
              <div className="project-card-footer">
                <p className="project-card-tagline">A professional, visual, and type-safe event architecture for Unity.</p>
              </div>
            </Link>

            <div className="project-card coming-soon-card">
              <div className="project-card-img-wrapper">
                <img src="img/home-page/home-page-wide.png" className="project-card-img" alt="Coming Soon" style={{ filter: 'blur(20px) brightness(0.35)' }} />
                <div className="coming-soon-content">
                  <h2 className="coming-soon-text-main">COMING SOON</h2>
                </div>
              </div>
              <div className="project-card-footer">
                <p className="project-card-tagline" style={{ color: '#666' }}>The next giant leap in innovation is currently in development.</p>
              </div>
            </div>

          </section>

        </div>
      </main>
    </Layout>
  );
}