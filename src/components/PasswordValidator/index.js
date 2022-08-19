// Write your code here
import {useState} from 'react'
import {
  DivCont,
  PassCont,
  Heading,
  Paragraph,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [showError, setError] = useState(true)
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
    console.log(password)
    console.log(password.length)
    console.log(showError)
    if (password.length >= 8) {
      setError(false)
    }
  }

  return (
    <DivCont>
      <PassCont>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input value={password} type="password" onChange={onChangePassword} />
        {showError && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PassCont>
    </DivCont>
  )
}

export default PasswordValidator
