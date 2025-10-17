import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import Notification, { type NotificationType } from "./notification";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [notif, setNotif] = useState<NotificationType>();
  const navigate = useNavigate();

  const allowedUsers: { email: string; password: string }[] = [
    {
      email: "marie.teacher@gmail.com",
      password: "Marie1989$",
    },
    {
      email: "tahina.student@gmail.com",
      password: "12tahina34",
    },
    {
      email: "user.admin@gmail.com",
      password: "$XfpU89_$",
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const user = allowedUsers.find(
      (allowedUser) => allowedUser.email === email
    );
    if (!user) {
      setNotif({
        message: "Ces identifiants ne sont pas reconnues",
        type: "error",
        duration: 3000,
      });
      setLoading(false);
      return;
    }
    if (user.password !== password) {
      setNotif({
        message: "Email ou mot de passe invalid",
        type: "error",
        duration: 3000,
      });
      setLoading(false);
      return;
    }
    const [firstIndex, lastIndex] = [email.indexOf("."), email.indexOf("@")];
    const role = email.slice(firstIndex + 1, lastIndex);
    setNotif({ message: "En attente de redirection...", type: "info" });
    switch (role) {
      case "admin":
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
        break;
      case "teacher":
        setTimeout(() => {
          navigate("/teacher");
        }, 2000);
        break;
      case "student":
        setTimeout(() => {
          navigate("/student");
        }, 2000);
        break;
      default:
        break;
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      {notif && (
        <Notification
          message={notif.message}
          type={notif.type}
          duration={notif.duration}
        />
      )}
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Connecte toi a ton compte</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Entrer vos identifiants afin de vous connecter
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="nom@example.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link
              to="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Mot de passe oublie?
            </Link>
          </div>
          <Input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </Field>
        <Field>
          <Button type="submit" onClick={handleSubmit} disabled={loading}>
            {loading ? <Spinner /> : "Se connecter"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
