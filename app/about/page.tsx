import {H1} from "@/components/typography";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Code, Github, Info} from "lucide-react";


export default function About() {
    // Explain the applestat.us with tailwind cards and a grid
    return (
        <>
            <H1>
                About
            </H1>
            <br />
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <Card className={"hover:bg-secondary hover:shadow"}>
                    <CardHeader>
                        <CardTitle>
                            <div>
                                <Info color={'white'} size={32} />
                            </div>
                            <div style={{ paddingTop: "1em", marginBottom: '-1em'}}>
                                What is this?
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                            This is a website that shows the status of Apple's services. This is adaptation of <a href="https://www.apple.com/support/systemstatus/">Apple's System Status</a> page using SSR and Next.js.
                        </p>
                    </CardContent>
                </Card>
                <Card className={"hover:bg-secondary hover:shadow"}>
                    <CardHeader>
                        <CardTitle>
                            <div>
                                <Code color={'white'} size={32} />
                            </div>
                            <div style={{ paddingTop: "1em", marginBottom: '-1em'}}>
                                How does it work?
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                            This website uses resources accessed by Apple's System Status page to get the status of Apple's services.
                        </p>
                    </CardContent>
                </Card>
                <Card className={"hover:bg-secondary hover:shadow"}>
                    <CardHeader>
                        <CardTitle>
                            <div>
                                <Github color={'white'} size={32} />
                            </div>
                            <div style={{ paddingTop: "1em", marginBottom: '-1em'}}>
                                Can I contribute?
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className={"leading-7 [&:not(:first-child)]:mt-6"}>
                            Yes! This website is open source. You can find the source code on <Link href={"https://github.com/quacksire/applestat.us"}>GitHub</Link>.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
