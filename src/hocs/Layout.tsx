import { FC } from "react";
import {Props} from '../types/generics';
import Navbar from "../components/nav/Navbar";

const Layout: FC<Props> = (props) => {
  
    return (
        <>
            
            <main>
                <header>
                        <Navbar/>
                </header>
                {props.children}
            </main>
        </>
    )
}

export default Layout;