import { Link, NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full px-4 py-3">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0">
            <img src="src/assets/lmslogo-removebg-preview.png" className="h-16 w-16 text-primary pt-1"/>
            <span className="text-2xl font-extrabold tracking-tight select-none">
              Book<span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-900"
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-900"
                )
              }
            >
              All Books
            </NavLink>
            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-900"
                )
              }
            >
              Add Book
            </NavLink>
            <NavLink
              to="/borrow-summary"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    :"text-gray-500 hover:text-gray-900"
                )
              }
            >
              Borrow Summary
            </NavLink>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t">
          <div className="mx-auto max-w-screen-xl flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              All Books
            </NavLink>
            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Add Book
            </NavLink>
            <NavLink
              to="/borrow-summary"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Borrow Summary
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
