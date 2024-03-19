import React from "react";

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden mt-[auto] px-[165px] pb-32">{children}</div>
    </>
  );
}
