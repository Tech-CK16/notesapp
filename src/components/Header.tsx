import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { LOGO } from '../constants/constant';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
    return (
        <AppBar color="transparent" position="static">
            <Toolbar sx={{ justifyContent: 'center' }}>
                <img
                    src={LOGO}
                    alt="logo"
                    style={{ width: 250, marginRight: 10 }}
                />
                <Typography>💀</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
