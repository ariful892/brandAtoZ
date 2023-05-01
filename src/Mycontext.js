import { useState } from "react";
import { createContext } from "react";


import React from 'react';
import Nav from "./Pages/Shared/Navbar/Nav";

const Mycontext = () => {
    const [nav2, setNav2] = useState(false)
     const MyContext = createContext("");
    return (
        <div className="hidden">
             <MyContext.Provider value={{ nav2, setNav2 }}>
                <Nav/>
        
      </MyContext.Provider>
            
        </div>
    );
};

export default Mycontext;