import { useState } from "react";
import Editor from "../Editor/Editor";
import './Dashboard.css';
import Data from "./Data/Data";
import UserMetrics from "./Metrics/UserMetrics";

const Dashboard = () => {
    const [tabName, setTabName] = useState("add-users")

    console.log(tabName)
    return (
        <div className={"dashboard-container"}>
            <div className={"side-menu"}>
                <ul className={"tab-list"}>
                    <li onClick={()=>setTabName("add-users")}>Add Users/Articles</li>
                    <li onClick={()=>setTabName("user-metrics")}>User Metrics</li>
                    <li onClick={()=>setTabName("data")}>Data</li>
                </ul>
            </div>
            <div className={"dashboard-content"}>
                {(tabName ==="add-users" && <Editor/>)
                || (tabName === "user-metrics" && <UserMetrics/>)
                || (tabName === "data" && <Data/>)
                }
            </div>
        </div>
    )
}
export default Dashboard;