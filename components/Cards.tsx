import {Card, CardHeader} from "@nextui-org/card";
import {AlertTriangle, CheckCircle} from "lucide-react";
import {btoa} from "buffer";
import Link from "next/link";

// @ts-ignore
export default function ServiceCards({ services }) {


    return (
        <div className="grid gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 align-middle h-full text-left">
            {services.map((service: any) => {
                let id = encodeURI(btoa(service.serviceName).replaceAll("=", ''))

                return (
                    <Link href={`/${id}`} id={id} className="-w-[400px] hover:bg-secondary hover:shadow cursor-pointer">
                        <Card className="w-full h-full hover:bg-secondary hover:shadow cursor-pointer" key={service.serviceName} id={id} isHoverable isPressable>
                            <CardHeader className="flex gap-3">
                                {service.events.length != 0 ? (<AlertTriangle color={'orange'} size={40} />) : (<CheckCircle color={'green'} size={40} /> )}
                                <div className="flex flex-col text-left">
                                    <p className="text-md">{service.serviceName}</p>
                                    <p className="text-small text-default-500 text-left">{service.events.length != 0 ? 'Outage Detected' : 'Healthy'}</p>
                                </div>
                            </CardHeader>
                        </Card>

                    </Link>
                )})
            }


        </div>
    )
}