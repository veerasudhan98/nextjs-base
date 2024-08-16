import Link from "next/link";
import React from "react";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "query" },
  { href: "/prisma-example", label: "prisma-example" },
  { href: "/contact", label: "contact" },
  { href: "/about", label: "about" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link className="btn btn-primary" href="/">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map(({ href, label }) => {
            return (
              <li key={href}>
                <Link href={href} className="captitalize">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
