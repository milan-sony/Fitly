"use client";

import { Button } from "@/components/shadcnui/button";
import { BicepsFlexed, Menu, X } from "lucide-react";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/shadcnui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const pathName = usePathname();
    console.log("pathName: ", pathName);

    let navbarLinks = [];

    navbarLinks = [
        { name: "Home", href: "/" },
        { name: "Calender", href: "#about" },
        { name: "Stat", href: "#products" },
        { name: "Settings", href: "#contact" },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="px-4 py-2 bg-secondary flex justify-between items-center sticky top-0 z-50 shadow-sm">
                {/* Logo */}
                <div>
                    <Link href="/" className="cursor-pointer">
                        <h1 className="flex items-center text-2xl font-black text-red-600 uppercase">
                            <BicepsFlexed className="mr-2" />
                            <span>Fltly</span>
                        </h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navbarLinks.map((link) => (
                                <NavigationMenuItem key={link.name}>
                                    <NavigationMenuLink
                                        className="bg-secondary text-secondary-foreground"
                                        asChild
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-md px-4 py-2 hover:text-red-500 transition"
                                        >
                                            {link.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Mobile Toggle Button */}
                <div className="lg:hidden">
                    <Button
                        variant="secondary"
                        size="icon"
                        className="size-9"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <Menu />
                    </Button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 min-h-screen w-64 bg-secondary shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden z-50`}
            >
                <div className="flex flex-row items-center border-b py-4 pl-2">
                    <Link href="/" className="cursor-pointer">
                        <h1 className="flex items-center text-2xl font-black text-red-600 uppercase">
                            <BicepsFlexed className="mr-2" />
                            <span>Fltly</span>
                        </h1>
                    </Link>

                    {/* Close btn */}
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Close menu"
                        className="absolute top-4 right-4 text-foreground-secondary hover:text-red-500"
                    >
                        <X className="w-7 h-7" />
                    </button>
                </div>

                <ul className="flex flex-col h-full gap-4 p-4">
                    {navbarLinks.map((item) => (
                        <li
                            key={item.name}
                            className="flex items-center p-2 text-md text-foreground-secondary hover:text-red-500 transition"
                        >
                            <Link
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center w-full"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
