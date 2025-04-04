"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TicketPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateId, Message } from "ai";

export const CreateTicket = ({ setMessages, reload }: { setMessages: (messages: Message[]) => void, reload: () => void }) => {
  const handleClick = () => {
    setMessages([
      {
        id: generateId(),
        content: "create a ticket for a new deal",
        role: "user",
      },
    ]);
    reload();
  };

  return (
    <div className="flex mx-auto px-4 w-full md:max-w-3xl mb-4">
      <Card
        onClick={handleClick}
        className={cn(
          "w-full cursor-pointer transition-all duration-200",
          "hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]",
          "bg-neutral-900/50",
          "border border-border",
          "rounded-none"
        )}
      >
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <div className="rounded-lg p-3 bg-primary/10 text-primary mb-3">
            <TicketPlus className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Create New Ticket</h3>
            <p className="text-sm text-muted-foreground">
              Click here to create a ticket with AI
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
