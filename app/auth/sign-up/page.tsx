import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <Card className="my-12 xl:my-24">
      <CardHeader>
        <CardTitle className="text-2xl xl:text-4xl m-4">Sign Up</CardTitle>

        <CardDescription className="text-lg xl-text-2xl m-2">
          Create an account to get started!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form></form>
      </CardContent>
    </Card>
  );
}
