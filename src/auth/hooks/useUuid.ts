import {v4 as uuid} from 'uuid';

export const useUuid = () => {
  const getUuid = () => {
    return uuid()
  }

  return{ getUuid }
}