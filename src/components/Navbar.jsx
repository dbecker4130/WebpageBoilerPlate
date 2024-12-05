import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import WorkPage from './WorkPage';
import { useTheme } from '@mui/material/styles';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              height: '50px'
            }}
      >
        <Box className='navbar' sx={{ color: `${theme.palette.primary.main}`, fontFamily: 'Anton CS, sans-serif', fontWeight: '400', fontStyle: 'normal' }}>
          <h2>Dred <span style={{ color: `${theme.palette.secondary.main}` }}>BMX</span> Shows</h2>
        </Box>
        <Tabs 
          value={value} 
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: `${theme.palette.secondary.main}`,
            }
          }}
          sx={{ width: '30%', height: '20px' }}>
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Work" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AboutPage></AboutPage>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <WorkPage></WorkPage>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContactPage></ContactPage>
      </CustomTabPanel>
    </Box>
  );
}