import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title={`ホーム`}
      description="新しいホームページです。">
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            textAlign: 'center',
          }}>
          <h1>
            これはChant Systemではありません！<br />
            デザインを似せたマニュアルです！
          </h1>
          <div style={{marginTop: '20px'}}>
            <Link
              className="button button--primary button--lg"
              to="/docs">
              ドキュメントを見る
            </Link>
          </div>
          <div style={{marginTop: '20px'}}>
            <Link
              className="button button--primary button--lg"
              href="https://www.chant.saint-care.com/">
              Chant Systemはこちら
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}