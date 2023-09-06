import {TypographyH1} from "@/components/typography";
import {Card, CardHeader} from "@nextui-org/card";
import {AlertCircle, AlertTriangle, CheckCircle, ChevronRightIcon, Cross, CrossIcon} from "lucide-react";
import ServiceCards from "@/components/Cards";

;

export default async function Home() {

    let req = await fetch('https://www.apple.com/support/systemstatus/data/developer/system_status_en_US.js', { next: { revalidate: 3600 } })
    let data = await req.text()

    let developerStatus = data.split("(")[1].split(")")[0]
    let developerStatusJSON = JSON.parse(developerStatus)
    let services = developerStatusJSON.services

    //console.log(services)

    services.forEach((service: any, i: any) => {
        if (service.events.length != 0) {
            //console.log(service.events)

            services.unshift(services.splice(i, 1)[0]);

        }
    })

    return (
        <>
            <TypographyH1 className={'text-center'}>
                Apple Developer Services
            </TypographyH1>
            <br />
            <ServiceCards services={services} />
        </>


    )
}