import { interfacePortraits } from "../types/interfacePortraits";

import {ReactNode } from "react";
export type Props = { 
    children: ReactNode
 }

export type PropsDetails = { 
    children: ReactNode,
    activity: number,
    portraits: Array<interfacePortraits>
 }