type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'hidden'
  | 'time'
  | 'url'
  | 'date'

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: InputType;
  more?: string;
  id?: string;
  nameLabel?: string
  max?: number
  min?: number
  border?: string
  required?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({ 
    nameLabel, type, id, value, onChange, placeholder, more, required, max, min
 }) => {
    return (
        <>
            <label htmlFor={nameLabel}>{nameLabel}</label> <br />
            <input 
                type={type}
                id={id}
                name={nameLabel}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`border w-[100%] rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${more}`}
                required={required}
                maxLength={max == 0 ? 99999 : max }
                minLength={min == 0 ? 1 : min }
            />
        </>
    )
}

export default CustomInput