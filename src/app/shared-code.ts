import { formOptions } from '@tanstack/react-form/nextjs'

export const formOpts = formOptions({
  defaultValues: {
    firstName: '',
    age: 0,
    version: 0,
  },
})

export interface FormModel {
  firstName: string
  age: number
  version: number
}
