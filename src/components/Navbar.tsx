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
    <div className="sticky top-0 left-0 z-50 w-full border-b bg-background text-foreground shadow h-[80px]">
      <nav className="w-full py-2">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0">
            <img src="https://i.postimg.cc/R0z3nmP5/lmslogo-removebg-preview.png" className="h-16 w-16 text-blue-700 pt-1"/>
            <span className="text-2xl text-blue-700 font-extrabold tracking-tight select-none">
              Book<span className="text-pink-500">Hub</span>
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
                    ? "text-blue-700"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
                    ? "text-blue-700"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                )
              }
            >
              All Books
            </NavLink>
            <NavLink
              to="/create-book"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200",
                  isActive
                    ? "text-blue-700"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
                    ? "text-blue-700"
                    :"text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
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
        <div className="md:hidden px-4 pb-4 pt-2 border-t absolute w-full bg-background text-foreground z-50">
          <div className="mx-auto max-w-screen-xl flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-blue-700"
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
                    ? "text-blue-700"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              All Books
            </NavLink>
            <NavLink
              to="/create-book"
              className={({ isActive }) =>
                cn(
                  "font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-blue-700"
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
                    ? "text-blue-700"
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
