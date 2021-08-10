import { useTranslation } from 'next-i18next';
import Modal from '../ui/Modal';

export default function LoginModal({ visible, onClose }) {
  const { t } = useTranslation('common');

  function save() {}

  return (
    <Modal
      visible={visible}
      title={`${t('sign-in')} ${t('or')} ${t('sign-up')}`}
      onClose={onClose}
      onSave={save}
    >
      <h1>Login Modal</h1>
    </Modal>
  );
}
