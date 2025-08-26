'use client'
import Link from "next/link";
import { ReactNode } from "react";

type BgStyle = 
  | 'bg-red-500'
  | 'bg-white'
  | 'bg-yellow-500'
  | 'bg-green-500'
  | 'bg-transparent';

type Padding = 
  | 'p-1' | 'p-2'
  | 'p-3' | 'p-4'
  | 'p-5' | 'p-6'
  | 'p-7' | 'p-8'

interface Props {
  url: string;
  bgColor: BgStyle;
  name?: string;
  icon?: ReactNode;
  pdd?: Padding
  margin?: string
}

export default function BtnUrl({ bgColor, url, icon, name, pdd, margin }: Props) {
    return (
        <Link 
        href={url}
        className={`
            ${bgColor} border border-white 
            ${pdd} rounded text-white hover:bg-white 
            hover:text-black ${margin}
        `}
        >
            {icon} {name}
        </Link>
    )
}