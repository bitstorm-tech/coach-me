import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Card from '../components/ui/Card';
import { useTranslation } from 'next-i18next';

export default function Roadmap() {
  const {t} = useTranslation('roadmap');

  return (
    <div className="p-10 flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0 justify-center">
      <Card header={t('header-platforms')}>
        <span className="font-bold">Browsers</span>
        <ul className="list-disc list-inside">
          <li>Chrome Extension</li>
          <li>Firefox Extension</li>
          <li>Safari Extension</li>
        </ul>
        <hr className="my-5"/>
        <span className="font-bold">Mobile</span>
        <ul className="list-disc list-inside">
          <li>iOS App</li>
          <li>Android App</li>
        </ul>
        <hr className="my-5"/>
        <span className="font-bold">Desktop</span>
        <ul className="list-disc list-inside">
          <li>Windows 10</li>
          <li>macOS</li>
          <li>Linux</li>
        </ul>
      </Card>
      <Card header={t('header-guardian-mechanics')}>
        <span className="font-bold">Peaceful</span>
        <ul className="list-disc list-inside">
          <li>Light Banner</li>
          <li>Fullscreen Banner</li>
        </ul>
        <hr className="my-5"/>
        <span className="font-bold">Normal</span>
        <ul className="list-disc list-inside">
          <li>Fullscreen Banner without close option</li>
          <li>Guardian SMS</li>
          <li>Guardian Phone Call</li>
        </ul>
        <hr className="my-5"/>
        <span className="font-bold">Hardcore</span>
        <ul className="list-disc list-inside">
          <li>Guardian SMS to other People</li>
          <li>Guardian Phone Call to other People</li>
        </ul>
      </Card>
    </div>
  );
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'roadmap'])
    }
  };
}
