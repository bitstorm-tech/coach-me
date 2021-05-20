import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div>
      <Head>
        <title>c04ch.ME</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <p className="p-10 text-center text-red-500">Hallo!</p>
    </div>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale)
    }
  };
}
