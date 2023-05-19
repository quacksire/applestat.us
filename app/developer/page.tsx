import {H1} from "@/components/typography";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {AlertCircle, AlertTriangle, CheckCircle, ChevronRightIcon, Cross, CrossIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default async function Home() {

    let req = await fetch('https://www.apple.com/support/systemstatus/data/developer/system_status_en_US.js', { next: { revalidate: 3600 } })
    let data = await req.text()

    let developerStatus = data.split("(")[1].split(")")[0]
    let developerStatusJSON = JSON.parse(developerStatus)
    let services = developerStatusJSON.services

    console.log(services)

    services.forEach((service: any, i: any) => {
        if (service.events.length != 0) {
            console.log(service.events)

            services.unshift(services.splice(i, 1)[0]);

        }
    })

    return (
        <>
            <H1>
                Apple Developer Services Status
            </H1>
            <br />
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {services.map((service: any) => (
                    <Card key={service.serviceName} className={"hover:bg-secondary hover:shadow"}>
                        <Accordion type="single" collapsible className="w-full" disabled={service.events.length == 0}>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <CardHeader>
                                        <CardTitle>
                                            <div>
                                                {service.events.length != 0 ? (<AlertTriangle color={'orange'} size={32} />) : (<CheckCircle color={'green'} size={32} /> )}
                                            </div>
                                            <div style={{ paddingTop: "1em", marginBottom: '-1em'}}>
                                                {service.serviceName}
                                            </div>
                                        </CardTitle>
                                        <CardContent>

                                        </CardContent>
                                    </CardHeader>
                            </AccordionTrigger>
                                <AccordionContent>
                                    <CardContent>
                                            {service.events.map((event: any) => (
                                                <div key={event.eventStatus}>
                                                    <code>{new Date(event.epochStartDate).toLocaleString()}</code> - {event.message}
                                                </div>
                                            ))}
                                    </CardContent>

                                </AccordionContent>
                            </AccordionItem>
                            </Accordion>
                    </Card>
                ))}
            </div>
        </>


    )
}