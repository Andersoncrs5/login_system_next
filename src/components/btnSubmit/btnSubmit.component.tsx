import { ReactNode } from "react"

type BgColor = 
    | "bg-green-600"
    | "bg-transparent"

interface Props {
    name?: string
    isSubmitting: boolean
    colorHover? : string
    padding?: string
    more?: string
    children?: ReactNode
    bgColor?: BgColor
    icon?: ReactNode
}

export default function BtnSubmit({
    icon, isSubmitting, bgColor, children,
    colorHover, more, name, padding
}: Props) {
    return (
        <div className={"flex justify-between items-center"} >
            <button 
                type="submit"
                disabled={isSubmitting}
                className={`flex ${more} items-center gap-2 ${bgColor} border text-white px-2 py-1 rounded 
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:border'}`}
            >
                {isSubmitting ? (
                    <>
                        <svg 
                            className="animate-spin h-5 w-5 text-white" 
                            viewBox="0 0 24 24"
                        >
                            <circle 
                                className="opacity-25" 
                                cx="12" cy="12" r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                            ></circle>
                            <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    name
                )}
            </button>
            {children}
        </div>
        
    );
}