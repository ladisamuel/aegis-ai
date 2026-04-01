import * as Yup from 'yup'

// ─── Login Schema ─────────────────────────────────────────────────────────────
export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean(),
})

export type LoginFormValues = Yup.InferType<typeof loginSchema>

// ─── Registration Schema ──────────────────────────────────────────────────────
export const registerSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .required('Full name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
  company: Yup.string().optional(),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required(),
})

export type RegisterFormValues = Yup.InferType<typeof registerSchema>

// ─── Contact / Demo Request Schema ───────────────────────────────────────────
export const contactSchema = Yup.object({
  name: Yup.string().min(2).required('Name is required'),
  email: Yup.string().email().required('Work email is required'),
  company: Yup.string().required('Company is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required(),
})

export type ContactFormValues = Yup.InferType<typeof contactSchema>
