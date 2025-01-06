import { Home, Contact } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { ModeToggle } from './mode-toggle';
import { NavLink } from 'react-router';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: <Home />,
  },
  {
    title: 'Contacts',
    url: '/contacts',
    icon: <Contact />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            IS Template
            <ModeToggle />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <NavLink key={item.title} to={item.url}>
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <div>
                        {item.icon} {item.title}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
