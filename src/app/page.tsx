import AddCompanyButton from './components/add-company-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM',
  description: 'Welcome to CRM-Companies',
};

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </>
  );
}
