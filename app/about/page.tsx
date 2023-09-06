import {TypographyH1} from "@/components/typography";
import Link from "next/link";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Code, Github, Info} from "lucide-react";
import {Divider} from "@nextui-org/divider";


export default function About() {
    // Explain the applestat.us with tailwind cards and a grid
    return (
        <>
            <TypographyH1>
                About
            </TypographyH1>
            <br />
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Info color={'white'} size={32} />
                        <div className="flex flex-col">
                            <p className="text-md">What is this?</p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>This is a website that shows the status of Apple's services. This is adaptation of <a href="https://www.apple.com/support/systemstatus/">Apple's System Status</a> page using SSR and Next.js.
                        </p>
                    </CardBody>
                </Card>

                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Code color={'white'} size={32} />
                        <div className="flex flex-col">
                            <p className="text-md">How does it work?</p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>This website uses resources accessed by Apple's System Status page to get the status of Apple's services.
                        </p>
                    </CardBody>
                </Card>

                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Github color={'white'} size={32} />
                        <div className="flex flex-col">
                            <p className="text-md">Can I contribute?</p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>Yes! This website is open source. You can find the source code on <Link href={"https://github.com/quacksire/applestat.us"}>GitHub</Link>. You can also open the Web Inspector console to see more indepth information
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}