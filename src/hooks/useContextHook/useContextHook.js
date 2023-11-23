import { useState, createContext} from "react";
export const LegacyContext = createContext();

export default function UseContextComponent({ children }) {
    let [surName, setSurName] = useState("Kumar");
    let [homeTown, setHomeTown] = useState("Hariyana");

    function changeInfo() {
        setHomeTown("Delhi");
        setSurName("Gupta");
    }
    return (
        <LegacyContext.Provider value={{userSurName: surName, userHomeTown: homeTown}}>
            { children }
        </LegacyContext.Provider>
    )
}