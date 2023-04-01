// this is custom hook and we must use 'use' keyword before function name in custom 
//hook function

import { useState } from "react";

export function useFormInput(initialVal){
    const [value,setValue] = useState(initialVal);

    function handleChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleChange
    }
}