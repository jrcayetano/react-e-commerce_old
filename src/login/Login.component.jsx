import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";


const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

    function loginAction(event) {
      const form = event.currentTarget;
      if(form.checkValidity === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      console.log(email);
      console.log(password);
      console.log('go to home', event);
      history.push('/home');
    }
  
    return (
      <div className="container">
        <h1>Login component</h1>
        <Form noValidate validated={validated} onSubmit={loginAction}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}

export default Login;