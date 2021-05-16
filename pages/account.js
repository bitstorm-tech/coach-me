import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import TabBar from '../components/ui/TabBar';
import PersonalInformationTab from '../components/page/account/PersonalInformationTab'
import { useTranslation } from 'next-i18next';
import SubscritpionTab from '../components/page/account/SubscriptionTab';

function Account() {
  const {t} = useTranslation('account');
  return (
    <>
      <Head>
        <title>Back 2 Business - Settings</title>
      </Head>
      <TabBar>
        <PersonalInformationTab tabText={t('personalInformation.tabText')} />
        <SubscritpionTab tabText={t('subscription.tabText')} />
      </TabBar>
    </>
  );
}

export default withPageAuthRequired(Account);

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'account'])
    }
  };
}
