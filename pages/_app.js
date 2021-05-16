import '../styles/tailwind.css';
import Layout from '../components/page/Layout';
import { appWithTranslation } from 'next-i18next';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({Component, pageProps}) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default appWithTranslation(MyApp);
