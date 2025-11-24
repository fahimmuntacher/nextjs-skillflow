
import Link from "next/link";
import React from "react";

const  Courses =() => {

  return (
    <div className="flex flex-col gap-2.5">
      <Link href="/courses/1">Course details :1</Link>
      <Link href="/courses/2">Course details :2</Link>
      <Link href="/courses/3">Course details :3</Link>
      <Link href="/courses/4">Course details :4</Link>
    </div>
  );
};

export default Courses;
