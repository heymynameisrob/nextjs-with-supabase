import { GoogleIcon } from "@/app/(auth)/login/_components/google-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function LoginPage() {

  return(
    <Card className="p-4">
      <CardContent className="flex flex-col items-center gap-4">
        <h1>Login to app</h1>
        <Button className="gap-2">
          <GoogleIcon />
          Sigin with Google
        </Button>
      </CardContent>
    </Card>      
  );
}
