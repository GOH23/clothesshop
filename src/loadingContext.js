import { createContext, useState } from "react"

export const LoadingContext = createContext();
export default function LoadingCont({ children }) {
    const [Loading, SetLoading] = useState(true);

    return (<LoadingContext.Provider value={{ Loading, SetLoading }}>
        {children}
    </LoadingContext.Provider>)


}