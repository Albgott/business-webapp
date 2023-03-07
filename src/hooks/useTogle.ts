import { useState } from "react"

export const useTogle = (initialValue: boolean = false) => {
  const [checked, setChecked] = useState(initialValue)
  
  const togle = () => {
    setChecked(!checked)
  }

  return {
    checked,
    togle
  }
}

export default useTogle