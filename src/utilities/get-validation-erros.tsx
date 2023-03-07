import { TypeWithKey } from "@/models"

export const getValidationError = (errorCode: any) => {
  const errors: TypeWithKey<string> = {
    "GENERIC": "There was an error. Check your inputs.",
    "SUCESS": "Operation success.",
  }

  return errors[errorCode]
}