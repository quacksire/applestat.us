import React from "react";

const H1 = (props) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {props.children}
        </h1>
    )
}

const H2 = (props) => {
    return (
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            {props.children}
        </h2>
    )
}

const H3 = (props) => {
    return (
        <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            {props.children}
        </h3>
    )
}

const H4 = (props) => {
    return (
        <h4 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
            {props.children}
        </h4>
    )
}

const H5 = (props) => {
    return (
        <h5 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
            {props.children}
        </h5>
    )
}

export { H1, H2, H3, H4, H5 }