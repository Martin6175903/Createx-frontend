interface IResObj {
  pattern?: RegExp
  minLength?: number
  maxLength?: number
  required?: boolean
}

function useValidField(typeInput: string) {
  let tempObj: IResObj = {}

  switch (typeInput) {
    case 'email':
      tempObj = {
        pattern: /[a-z]+[a-zA-Z0-9]{1,20}@[a-z]{1,8}\.[a-z]{1,5}/,
        maxLength: 80,
        required: true
      }
      break;
    case 'fullname':
      tempObj = {
        pattern: /[A-Z]+[a-z]{1,15}\s[A-Z]+[a-z]{1,15}\s[A-Z]+[a-z]{1,15}/,
        required: true,
        minLength: 8,
        maxLength: 100
      }
      break;
    case 'password':
      tempObj = {
        pattern: /[A-Z]+[a-zA-Z]+[0-9]{3,15}/,
        minLength: 8,
        maxLength: 100,
        required: true
      }
      break;
    default:
      return new Error('Field not found');
  }

  return Object.values(tempObj).length ? tempObj : '';
}

export default useValidField;