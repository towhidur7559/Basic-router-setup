// import { createContext, useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

// export const HomeContext = createContext(null);
const Home = () => {
    // console.log(data);
   
    // const [homeData, setHomeData] = useState('from home')
// const homeData = useContext(AuthContext);

    return (
        <div>
            {/* <h1>{data.children}</h1>
            <HomeContext.Provider value={homeData}>{data.children}</HomeContext.Provider> */}
            <h1>home</h1>
        </div>
    );
};

export default Home;