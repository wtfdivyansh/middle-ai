/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from '@/context/auth.context';
import { getChatsByUserId } from '@/lib/db/queries';

export async function GET() {
    const { user, loading } = useAuth();

  if (loading || !user) {
    return Response.json('Unauthorized!', { status: 401 });
  }

  // biome-ignore lint: Forbidden non-null assertion.
  const chats = await getChatsByUserId({ id: user.id! });
  return Response.json(chats);
}