import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Profile from "../../components/Form/form";



//Function component with Hooks 

    export function AboutUs(){
        const [name, setName] = useState('Hossam');

        useEffect(() => {
        setName('yasen');
        }, [])

        useEffect(() => {
            console.log(name);
        }, [name])
        
        
        return(
            <>
            <Header/>
            <Profile/>

            </>
        )
        }
    