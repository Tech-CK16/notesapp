import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { LOGO } from '../constants/constant';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
    return (
        <AppBar color="transparent" position="static">
            <Toolbar>
                <img
                    src={LOGO}
                    alt="logo"
                    style={{ width: 150, marginRight: 10 }}
                />
                <Typography>💀</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
