import Topbar from "@/components/shared/Topbar";
import RightSidebar from "@/components/shared/RightSidebar";
import React from "react";
import BottomBar from "@/components/shared/BottomBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Topbar />
    <RightSidebar />
    <BottomBar />
    </>
  )
}