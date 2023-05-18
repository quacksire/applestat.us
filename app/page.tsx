import {H1} from "@/components/typography";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {AlertCircle, AlertTriangle, CheckCircle, ChevronRightIcon, Cross, CrossIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default async function Home() {

    let req = await fetch('https://www.apple.com/support/systemstatus/data/system_status_en_US.js')
    let data = await req.text()

    let developerStatusJSON = JSON.parse(data)
    let services = developerStatusJSON.services

    services.forEach((service, i) => {
        if (service.events.length != 0) {
            services.unshift(services.splice(i, 1)[0]);
        }
    })

    return (
        <>
            <H1>
                Apple Services Status
            </H1>
            <br />
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {services.map(service => (
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

                                    </CardHeader>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <CardContent>
                                        {service.events.map(event => (
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