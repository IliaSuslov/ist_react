import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/contacts')({
  component: RouteComponent,
});

function RouteComponent() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-2">
      <h2>Contacts</h2>
      <div>
        <Button
          onClick={() => {
            toast({
              title: 'Test Toast',
              description: 'Toast подключен',
            });
          }}
        >
          Показать оповещение
        </Button>
      </div>
    </div>
  );
}
