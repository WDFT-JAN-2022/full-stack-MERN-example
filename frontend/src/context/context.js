import { createContext } from "react";

const AppContext = createContext();


// CREATE A WRAPPER COMPONENT
function AppProviderWrapper(props) {

  return (
    {/* SET UP THE PROVIDER */}
    <AppContext.Provider value={"dark"}>
        {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProviderWrapper };