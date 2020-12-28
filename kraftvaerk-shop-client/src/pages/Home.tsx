import React from "react"

interface HomeProps {
    title: string;
}

export const Home: React.FC<HomeProps> = ({title}) => {
    return ( 
        <h1>{title}</h1>
    );
}