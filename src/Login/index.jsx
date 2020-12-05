import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { useConfig, Credentials } from '../Config';
import './style.css'

const LoginPage = props => {
    const [errorMessage, setError] = useState(null)
    const {
        settingsData,
        onChangeSettingsData
      } = useConfig(props);

    const handleChange = (e, key) =>{
        onChangeSettingsData(key, e.target.value);
    }

    const handleLogin = () => {
        if(settingsData && 
            settingsData.username == Credentials.username && 
            settingsData.password == Credentials.password) {
            setError(null);
            props.history.push('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    }

    return (
        <Card className='container'>
            <CardHeader className='loginHeader' title="Candidate Login" />
            <CardContent>
            <div>
                <TextField
                error={errorMessage != null}
                fullWidth
                id="username"
                type="email"
                label="Username"
                placeholder="Username"
                value={settingsData.username}
                onChange={(e) => { handleChange(e,'username')}}
                />
                <TextField
                 error={errorMessage != null}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={settingsData.password}
                onChange={(e) => { handleChange(e,'password')}}
                helperText={errorMessage}
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
