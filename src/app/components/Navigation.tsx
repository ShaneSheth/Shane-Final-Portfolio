import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/teams", label: "Teams" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];
  
  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="flex gap-6 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-sm">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm transition-colors ${
              location.pathname === link.path
                ? "text-neutral-900"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}