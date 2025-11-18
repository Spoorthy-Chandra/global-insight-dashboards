import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateLogin } from "@/lib/auth";
import { toast } from "sonner";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (validateLogin(email, password)) {
        toast.success("Login successful!");
        navigate("/home");
      } else {
        toast.error("Invalid credentials. Try: admin / admin123");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md animate-scale-in">
        <div className="glass rounded-2xl p-8 card-shadow">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <LogIn className="text-primary" size={32} />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Login to explore the dashboards</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Username / Email</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin123"
                required
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full gradient-primary hover:opacity-90 transition-opacity"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 glass rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Demo Credentials:</strong>
              <br />
              Username: admin | Password: admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
