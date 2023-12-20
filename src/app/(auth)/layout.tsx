export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="grid place-items-center min-h-[100dvh]">
      {children}
    </div>
  )
}
