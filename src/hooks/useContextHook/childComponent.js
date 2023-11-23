import {useContext} from "react";
import {LegacyContext} from "./useContextHook"

export default function ChildComponent() {
    let legacyData = useContext(LegacyContext);

    return (
        <>
            <h2>This is Child Component</h2>
            <p>Surname: {legacyData.userSurName}</p>
            <p>Home Town: {legacyData.userHomeTown}</p>
        </>
    )
}