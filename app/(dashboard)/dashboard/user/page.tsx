import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/user-tables/client';
const breadcrumbItems = [{ title: 'User', link: '/dashboard/user' }];
import { auth } from '@/auth';
import { Session } from 'next-auth';

async function getData(session: Session | null) {
  const res = await fetch('http://localhost:5000/users', {
    headers: {
      token: `${session?.user.token}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function page() {
  const session = await auth();
  const data = await getData(session);
  console.log(data);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={data?.user_items} />
      </div>
    </>
  );
}
