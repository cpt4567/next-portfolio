import MacUi from '@/components/mac-ui/mac-ui';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MacUi title={''}>
      <p>Skill</p>
      {children}
    </MacUi>
  );
}
