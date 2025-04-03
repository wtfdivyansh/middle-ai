import { Chat } from "@/components/custom/chat/chat";
import { getMessagesByChatId } from "@/lib/db/queries";
import { convertToUIMessages } from "@/lib/utils";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;
  const dbMessages = await getMessagesByChatId({ id: chatId });
  const initialMessages = convertToUIMessages(dbMessages);

  return (
    <Chat
      id={chatId}
      initialMessages={initialMessages}
      selectedChatModel={""}
      isReadonly={false}
    />
  );
}
