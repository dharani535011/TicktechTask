import { createContext, useState } from "react";

export const Contextprovider=createContext()

const Othercontext=({children})=>{
    const [Sun,setsun]=useState("moon")
    return(
        <Contextprovider.Provider value={{Suns:[Sun,setsun]}}>
            {children}
        </Contextprovider.Provider>
    )
}
export default Othercontext