import {TypographyH1} from "@/components/typography";
import ServiceCards from "@/components/Cards";
import {Metadata} from "next";



export default async function Home() {

    let req = await fetch('https://www.apple.com/support/systemstatus/data/system_status_en_US.js', { next: { revalidate: 3600 } })
    let data = await req.text()

    let developerStatusJSON = JSON.parse(data)
    let services = developerStatusJSON.services

    services.forEach((service: any, i: any) => {
        if (service.events.length != 0) {
            services.unshift(services.splice(i, 1)[0]);
        }
    })

    return (
        <>
            <TypographyH1 className={'text-center'}>
                Apple Services
            </TypographyH1>
            <br />
            <ServiceCards services={services} />
        </>


    )
}