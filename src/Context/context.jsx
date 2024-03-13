import { createContext, useState } from "react";

export const Context = createContext()

export const Provider = ({children}) => {

    const [scrollYServices, setScrollYServices] = useState(0)
    const [scrollYContact, setScrollYContact] = useState(0)

    function goHome(){
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }

    function goServices(){
        window.scroll({
            top: scrollYServices - 100,
            behavior: "smooth",
        })
    }

    function goContact(){
        window.scroll({
            top: scrollYContact,
            behavior: "smooth",
        })
    }

    const value = {
        goHome,
        scrollYServices, setScrollYServices,
        goServices,
        scrollYContact, setScrollYContact,
        goContact
    }

    return(
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}