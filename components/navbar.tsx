"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {usePathname} from "next/navigation";

import { Separator } from "@/components/ui/separator"
import {Code2, HomeIcon, InfoIcon} from "lucide-react";
import {useEffect} from "react";

export function NavigationBar() {
    const pathname = usePathname();

    useEffect(() => {
        console.info(`
            Hello! \n
            I'm a 17-year old High School senior student self taught in React/Vue. I currently live in the SF Bay Area\n
            This project is a prime example of how React Server Components can be used in a dashboard like view, and how RSCs can successfully be used with SEO/PWA features
            
            This was not an academic project, I made it with my own free will.
            
            If you're curious, this is the GitHUb repository: https://github.com/quacksire/applestat.us \n
            - Sam \<\s\a\m\@\qu\a\c\k\s\i\r\e\.\d\e\v\>
            
            `)
    }, []);

    return (
        <>
            <Separator orientation="vertical" className="h-6" />
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <HomeIcon size={24} color={pathname == '/' ? 'lightblue' : "white"} />
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/developer" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <Code2 size={24} color={pathname == '/developer' ? 'lightblue' : "white"} />
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <InfoIcon size={24} color={pathname == '/about' ? 'lightblue' : "white"} />
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}