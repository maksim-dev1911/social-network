import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const PreloaderTwo = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            position: 'fixed', left: '0',
            top: '0', right: '0',
            bottom: '0',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <CircularProgress size={100} />
        </Box>
    );
}

export default PreloaderTwo;