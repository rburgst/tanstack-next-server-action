'use server'

import {
  ServerValidateError,
  createServerValidate,
} from '@tanstack/react-form/nextjs'
import { formOpts } from './shared-code'
import type { FormState, ServerFormState } from '@tanstack/react-form/nextjs'
import type { FormModel } from './shared-code'

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.age < 12) {
      return 'Server validation: You must be at least 12 to sign up'
    }
  },
})

export default async function someAction(
  prev: unknown,
  formData: FormData,
): Promise<ServerFormState<FormModel>> {
  try {
    await serverValidate(formData)
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState as FormState<FormModel>
    }

    // Some other error occurred while validating your form
    throw e
  }
  const version = parseInt(formData.get('version') as string, 10)

  console.log('Server validation passed!')
  const result: ServerFormState<FormModel> = {
    values: {
      age: parseInt(formData.get('age') as string, 10),
      firstName: (formData.get('firstName') as string | undefined) ?? '',
      version: version + 1,
    },
    errors: [],
    errorMap: {},
  }
  console.log('Server return result', result)
  // Your form has successfully validated!
  return result
}
