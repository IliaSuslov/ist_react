import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/items/$itemId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { itemId } = useParams({ strict: false });

  return <div>Hello "/items/{itemId}"!</div>;
}
