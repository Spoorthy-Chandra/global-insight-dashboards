import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { logout, getCurrentUser, isAuthenticated } from "@/lib/auth";
import { BarChart3, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const authenticated = isAuthenticated();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const navLinks = authenticated
    ? [
        { to: "/home", label: "Home" },
        { to: "/gallery", label: "Gallery" },
        { to: "/compare", label: "Compare" },
        { to: "/search", label: "Search" },
        { to: "/timeline", label: "Timeline" },
        { to: "/admin", label: "Admin" },
        { to: "/contact", label: "Contact" },
      ]
    : [];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={authenticated ? "/home" : "/"} className="flex items-center gap-2 text-xl font-bold">
            <BarChart3 className="text-primary" size={28} />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Income Inequality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {authenticated && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user?.name || user?.email}
                </span>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/30 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {authenticated && (
              <>
                <div className="text-sm text-muted-foreground py-2">
                  Welcome, {user?.name || user?.email}
                </div>
                <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
