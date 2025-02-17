export interface ISignInFormInput {
  email: string
  password: string
  mailing: boolean
}

export interface ISignUpFormInput {
  fullname: string
  email: string
  password: string
  confPassword: string
  remember: boolean
}