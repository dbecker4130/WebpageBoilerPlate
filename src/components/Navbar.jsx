import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import WorkPage from './WorkPage';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', border: '1px solid red', height: '100vh' }}>
      <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              height: '50px'
            }}
      >
        <Box>
          LOGO
        </Box>
        <Tabs 
          value={value} 
          onChange={handleChange}
          aria-label="basic tabs example"
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