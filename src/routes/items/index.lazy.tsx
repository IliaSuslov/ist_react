import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/items/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/items/1">to 1 item</Link>
    </div>
  );
}
