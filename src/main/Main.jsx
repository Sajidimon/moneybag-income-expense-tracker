import { Outlet } from "react-router-dom";
import Navigation from "../components/shared/navigation/Navigation";


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;