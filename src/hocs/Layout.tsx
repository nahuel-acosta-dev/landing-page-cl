import { FC, ReactNode, useState } from "react";
import {Props} from '../types/generics';
import Navbar from "../components/nav/Navbar";

const Layout: FC<Props> = (props) => {
  
    return (
        <>
            <header>
                    <Navbar/>
            </header>
            <main>
                
                {props.children}
            </main>
        </>
    )
}

export default Layout;