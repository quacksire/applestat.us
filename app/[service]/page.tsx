import {Metadata, ResolvingMetadata} from "next";
import {TypographyH1} from "@/components/typography";
import {redirect} from "next/navigation";
import {btoa} from "buffer";
import {Card, CardHeader} from "@nextui-org/card";
import {AlertTriangle, CheckCircle} from "lucide-react";
import {Button} from "@nextui-org/button";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";



export async function generateMetadata(
    // @ts-ignore
    {params},
    parent: ResolvingMetadata
): Promise<Metadata> {

    if (!params.service) {
        redirect('/')
    }

    let requestedService = params.service
    requestedService = decodeURI(requestedService)

    //console.log(requestedService)

    let filterResult: any;


    let req = await fetch('https://www.apple.com/support/systemstatus/data/developer/system_status_en_US.js', {next: {revalidate: 3600}})
    let data = await req.text()

    let developerStatus = data.split("(")[1].split(")")[0]
    let developerStatusJSON = JSON.parse(developerStatus)
    let services = developerStatusJSON.services

    let stockreq = await fetch('https://www.apple.com/support/systemstatus/data/system_status_en_US.js', {next: {revalidate: 3600}})
    let stockdata = await stockreq.text()

    let stockStatusJSON = JSON.parse(stockdata)
    let stockServices = stockStatusJSON.services

    services.forEach((service: { serviceName: string; }) => {
        if (btoa(service.serviceName).replaceAll('=', '') === requestedService) {
            filterResult = service
        }
    })

    stockServices.forEach((service: { serviceName: string; }) => {
        if (btoa(service.serviceName).replaceAll('=', '') === requestedService) {
            filterResult = service
        }
    })

    if (!filterResult) {
        redirect('/')
    }

    let productString = String(filterResult.serviceName).toLowerCase().replace(" - ", ' ')

    if (productString === "account" || productString === "videos") productString = `developer ${productString}`

    const keywordsArray = [
        `${productString} down`,
        `${productString} server status`,
        `${productString} status`,
        `apple ${productString}`,
        `${productString} service status`,
        `${productString} online`,
        `${productString} outage`,
        `${productString} offline`,
        `${productString} outage`,
        `Apple ${productString} availability`,
        `Apple ${productString} operational status`,
        `Is ${productString} currently experiencing issues?`,
        `Latest updates on ${productString} status`
        // Add more keywords as needed
    ];


    return {
        title: `${filterResult.serviceName}`,
        generator: 'Next.js v13 App Router',
        keywords: keywordsArray,
        description: `Check the status of ${filterResult.serviceName}`
    }


}

export default async function ServicePage({params}: { params: { service: string } }) {
    if (!params.service) {
        redirect('/')
    }

    let requestedService = params.service
    requestedService = decodeURI(requestedService)

    console.log(requestedService)

    let filterResult: any = null;

    let req = await fetch('https://www.apple.com/support/systemstatus/data/developer/system_status_en_US.js', {next: {revalidate: 3600}})
    let data = await req.text()

    let developerStatus = data.split("(")[1].split(")")[0]
    let developerStatusJSON = JSON.parse(developerStatus)
    let services = developerStatusJSON.services

    let stockreq = await fetch('https://www.apple.com/support/systemstatus/data/system_status_en_US.js', {next: {revalidate: 3600}})
    let stockdata = await stockreq.text()

    let stockStatusJSON = JSON.parse(stockdata)
    let stockServices = stockStatusJSON.services

    services.forEach((service: { serviceName: string; }) => {
        if (btoa(service.serviceName).replaceAll('=', '') === requestedService) {
            filterResult = service
        }
    })

    stockServices.forEach((service: { serviceName: string; }) => {
        if (btoa(service.serviceName).replaceAll('=', '') === requestedService) {
            filterResult = service
        }
    })


    if (!filterResult) {
        redirect('/')
    }
    //console.log(filterResult)

    // @ts-ignore
    const serviceName = (filterResult.serviceName === "Account" || filterResult.serviceName === "Videos") ? `Developer ${filterResult.serviceName}` : filterResult.serviceName


    // @ts-ignore
    return ( <>
        <div className={'text-center'}>
        <TypographyH1> {serviceName} </TypographyH1>
        <br/>

        <Button
            variant={'light'}
            startContent={filterResult?.events.length != 0 ? (
                <AlertTriangle color={'orange'} className={'object-cover'} size={40}/>) : (
                <CheckCircle color={'green'} className={'object-cover'} size={40}/>)}
            color={filterResult?.events.length != 0 ? 'warning' : 'default'}
            className={'m-4 pointer-events-none'}
            disableAnimation
            aria-label={filterResult?.events.length != 0 ? serviceName + ' Outage Detected' : serviceName + ' is Healthy'}
            size={'lg'}
        >
            {/* @ts-ignore */}
            {filterResult.events.length != 0 ? 'Outage Detected' : 'Healthy'}
        </Button>

        {/* @ts-ignore */}
        {filterResult.events.length != 0 && (
            <>

                {/* @ts-ignore */}
                {filterResult.events.map((event: { eventStatus: any; statusType: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; startDate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; endDate: any; }) => {
                    return (
                        <Card className="py-4 w-[25] mt-3">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{String(event.eventStatus).toLocaleUpperCase()} {event.statusType}</p>
                                <small className=" text-large">{event.message}</small>
                                <h4 className="text-default-500"> {event.startDate}{event?.endDate ? ` - ${event?.endDate}` : null }</h4>
                            </CardHeader>
                        </Card>
                    )
                })}

            </>

        )}


    </div></>)
}


/*
<AccordionContent>
                                    <CardContent>
                                        {service.events.map((event: any) => (
                                            <div key={event.eventStatus}>
                                                <code>{new Date(event.epochStartDate).toLocaleString()}</code> - {event.message}
                                            </div>
                                        ))}
                                    </CardContent>

                                </AccordionContent>
 */
