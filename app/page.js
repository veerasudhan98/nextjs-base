import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js project</h1>
      <Link href="\about" className="btn btn-accent">
        AboutPage
      </Link>
    </div>
  );
};

export default HomePage;
