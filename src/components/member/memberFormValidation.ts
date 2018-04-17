import {
  Validators, ValidationConstraints, createFormValidation
} from 'lc-form-validation';

const validationConstraints: ValidationConstraints = {
  fields: {
    firstName: [
      { validator: Validators.required },
      {
        validator: Validators.minLength,
        customParams: { length: 3 },
      },
    ]
  },
};

export const memberFormValidation = createFormValidation(validationConstraints);
