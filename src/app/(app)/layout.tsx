
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-layout">
      <nav role="navigation" className="flex flex-row items-center justify-between px-4 py-2 h-14 border-b border-outline">
        Topbar 
      </nav>
      <main>
        {children}
      </main>
      <footer role="footer">
        <small>Footer</small>
      </footer>
    </div>
  );
}
