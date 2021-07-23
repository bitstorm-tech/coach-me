import Card from '../../ui/Card';
import Input from '../../ui/Input';

export default function PersonalInformationTab() {
  return (
    <div className="p-10">
      <Card>
        <div className="flex justify-between space-x-4">
          <Input label="Vorname" />
          <Input label="Nachname" />
        </div>
        <Input label="Nickname" />
        <Input label="E-Mail" />
      </Card>
    </div>
  );
}
