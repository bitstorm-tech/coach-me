import PrimaryButton from '../ui/buttons/PrimaryButton';
import { useTranslation } from 'next-i18next';
import Modal from '../ui/Modal';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal(props: LoginModalProps) {
  const { t } = useTranslation('common');

  const buttons = [
    <PrimaryButton onClick={() => alert('Hallo!!!!')}>Hallo</PrimaryButton>,
    <PrimaryButton onClick={() => alert('Mega!!!!!')}>Mega!</PrimaryButton>,
  ];

  return (
    <Modal
      title={`${t('sign-in')} ${t('or')} ${t('sign-up')}`}
      onClose={props.onClose}
      buttons={buttons}
    >
      <h1>Login Modal</h1>
    </Modal>
  );
}
