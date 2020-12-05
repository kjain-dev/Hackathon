import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import './style.css'

const LoginPage = props => {
    const handleLogin = () => {
        props.history.push('/dashboard');
      }

    return (
        <Card className='container'>
            <CardHeader className='header' title="Login" />
            <CardContent>
            <div>
                <TextField
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                />
                <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                />
            </div>
            </CardContent>
            <Button
            variant="contained"
            size="medium"
            color="primary"
            className='loginBtn'
            onClick={handleLogin}
            >
                Login
            </Button>
      </Card>
      );
  
};

export default LoginPage;
