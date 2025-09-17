import Sidebar, { OpenedState } from './sidebar';

interface SidebarWrapperProps {
  initialState?: OpenedState;
  title: string;
}

export default function SidebarWrapper({
  initialState = 'opened',
  title,
}: SidebarWrapperProps) {
  return (
    <div>
      <Sidebar title={title} initialState={initialState} />
    </div>
  );
}
