import { Button } from '@/components/ui/button';
import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/items/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/items/1">
        <Button>to 1 item</Button>
      </Link>
    </div>
  );
}
