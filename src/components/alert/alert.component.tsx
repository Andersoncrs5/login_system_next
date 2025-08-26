import { BgStyleType } from "@/types/bg.type";
import { BorderStyleType } from "@/types/border.type";
import { TextStyleType } from "@/types/text.type";

interface Props {
    msg: string;
    bgStyle: BgStyleType;    
    textStyle: TextStyleType;  
    border: BorderStyleType
}

export default function Alert(props: Props) {
    return (
        <div 
            className={`
                absolute top-[2%]         
                left-1/2 -translate-x-1/2 
                z-50 w-[80%] 
                text-center
                border ${props.border}
                mt-2 rounded p-2
                ${props.bgStyle}
            `} 
        >
            <p className={`my-1 ${props.textStyle}`} >{props.msg}</p>
        </div>
    )
}






