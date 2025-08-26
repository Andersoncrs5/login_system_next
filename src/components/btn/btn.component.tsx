'use client'

import { ReactNode } from "react"

type Padding = 
    | 'p-1' | 'p-2'
    | 'p-3' | 'p-4'
    | 'p-5' | 'p-6'
    | 'p-7' | 'p-8'

interface Props {
    title?: string
    icon?: ReactNode
    padding: Padding
    margin?: string
    fn: () => any
    disabled?: boolean
}

export default function Btn({ title, icon, padding, margin, fn, disabled }:Props) {
    return (
        <button
            className={`
                bg-transparent border border-white 
                ${padding} rounded text-white hover:bg-white 
                hover:text-black ${margin}
            `}
            onClick={fn}
            disabled={disabled}
        >
            {icon} {title}
        </button>
    )
}