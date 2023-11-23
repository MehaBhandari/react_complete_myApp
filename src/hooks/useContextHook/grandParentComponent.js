
import Parent from "./parentComponent";
import ChildComponent from "./childComponent";
import UseContextComponent from "./useContextHook";

export default function GrandParent() {
   

    return (
        <UseContextComponent>
            <h2>This is GrandParent</h2>
            <Parent></Parent>
            <ChildComponent></ChildComponent>
        </UseContextComponent>
    )
}