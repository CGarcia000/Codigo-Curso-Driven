import { AccountViewer } from "./AccountViewer";

import { Suggestions } from "./Suggestions";
import { SidebarFooter } from "./SidebarFooter";


export function Secundary() {
    return (
        <div id="box-left">
            <div id="side-bar">
                <AccountViewer />

                <Suggestions />

                <SidebarFooter />
            </div>
        </div>
    );
}


