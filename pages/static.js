import React from "react";
import Link from "next/link";

export default function Static() {
  return (
    <div>
      /static page
      <nav>
        <Link href="/other">
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
}
