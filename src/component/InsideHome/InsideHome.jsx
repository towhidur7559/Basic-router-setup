import { useContext } from "react";
import { HomeContext } from "../Home/Home";

const InsideHome = () => {
    const homeData = useContext(HomeContext);
    console.log(homeData);
    return (
        <div>
            <h1>{homeData}</h1>
        </div>
    );
};

export default InsideHome;