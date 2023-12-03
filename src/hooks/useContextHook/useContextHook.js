import { useState, createContext} from "react";
export const LegacyContext = createContext();

export default function UseContextComponent(props) {
    let [surName, setSurName] = useState("Kumar");
    let [homeTown, setHomeTown] = useState("Hariyana");

    function changeInfo() {
        setHomeTown("Delhi");
        setSurName("Gupta");
    }
    return (
        <LegacyContext.Provider value={{userSurName: surName, userHomeTown: homeTown}}>
            { props.children }
        </LegacyContext.Provider>
    )
}