import { AiFillGithub } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { Container, Input, Button, InputError, FalseInput } from './styles';
import { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState(null);
  const [submitedNull, setSubmitedNull] = useState(false);
  const { SignIn } = useAuth();

  function handleChange(event) {
    if (submitedNull) {
      setSubmitedNull(false);
    }
    setUsername(event.target.value);
  }

  async function handleSubmit() {
    if (!username) {
      setSubmitedNull(true);
    } else {
      await SignIn(username);
      history.push('/home');
    }
  }

  return (
    <Container>
      <AiFillGithub color="#FFCE00" size={112.24} />
      <FalseInput>
        <Input placeholder="Usuário" value={username} onChange={handleChange} />
        {submitedNull ? <InputError>Campo obrigatório</InputError> : null}
      </FalseInput>
      <Button onClick={handleSubmit}>
        Entrar
        <FiArrowRight
          color="#000000"
          size={26.24}
          style={{ 'margin-left': 13 }}
        />
      </Button>
    </Container>
  );
}
