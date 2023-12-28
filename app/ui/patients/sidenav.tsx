"use client";

import { Sidebar } from "flowbite-react";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <Sidebar aria-label="sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HomeIcon}>
            Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
