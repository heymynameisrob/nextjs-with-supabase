import { redirect } from "next/navigation";
import { LoginButton } from "@/components/auth/login/login-button";
import { Card, CardContent } from "@/components/ui/card";
import { getCurrentUser } from "@/db/auth";

// Forces SSR as Next defaults to SSG
export const dynamic = "force-dyanmic";

export default async function LoginPage() {
  const { isSignedIn } = await getCurrentUser();

  if (isSignedIn) {
    return redirect("/dashboard");
  }

  return (
    <Card className="p-4">
      <CardContent className="flex flex-col items-center gap-4">
        <h1>Login to app</h1>
        <LoginButton />
      </CardContent>
    </Card>
  );
}
