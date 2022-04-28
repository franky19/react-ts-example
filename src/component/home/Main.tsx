import React, { PropsWithChildren } from "react";

interface MainProps {
    children: any;
  }

const Main :React.FC<PropsWithChildren<MainProps>> = ({children}) => {
    return(
        <main className='row' style={{ minHeight : 'calc(100vh - 70px)' }}>
            {children}
        </main>
    )
}

export default Main