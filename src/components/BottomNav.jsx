import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';


const BottomAppBar = styled(Box)(({ theme }) => ({
  width: '80vw',
  maxWidth: '500px',
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '2vw',
  padding: '1vw',
  backgroundImage:'linear-gradient(45deg,rgb(60, 220, 146),rgb(78, 223, 151),rgb(100, 191, 230),rgb(88, 171, 234))',
  border: '1px solid #BDBDBD', // match border color
  borderRadius: '20px',
  zIndex: 1000,
  boxShadow: '0 0 15px 5px rgba(189, 189, 189, 0.7)', // glow effect
}));
export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState('/'); // Default value is set to home

  useEffect(() => {
    // Update the tab value based on the current location
    if (location.pathname === '/') {
      setValue('/');
    } else if (location.pathname === '/Lessons') {
      setValue('/Lessons');
    } else if (location.pathname === '/Progress') {
      setValue('/Progress');
    } else if (location.pathname === '/Tests') {
      setValue('/Tests');
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Navigate based on the selected tab
    switch (newValue) {
      case '/':
        navigate('/');
        break;
      case '/Lessons':
        navigate('/Lessons');
        break;
      case '/Progress':
        navigate('/Progress');
        break;
      case '/Tests':
        navigate('/Tests');
        break;
      default:
        break;
    }
  };

  return (
    <BottomAppBar>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="inherit"
        indicatorColor="primary"
        centered
      >
        <Tab value="/" label="Home" wrapped />
        <Tab value="/Lessons" label="Lessons" />
        <Tab value="/Progress" label="Progress" />
        <Tab value="/Tests" label="Tests" />
      </Tabs>
    </BottomAppBar>
  );
}
