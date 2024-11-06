import React, {createContext, useState} from "react";
import App from "./App";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    return(
        <AppContext.Provider value={{items, setItems, categories}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext;