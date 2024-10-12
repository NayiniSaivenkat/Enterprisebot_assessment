import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ text, isSentByUser }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSentByUser ? 'flex-end' : 'flex-start',
        padding: '8px',
      }}
    >
      <Box
        sx={{
          backgroundColor: isSentByUser ? '#dcf8c6' : '#ffffff',
          borderRadius: '8px',
          padding: '10px',
          maxWidth: '60%',
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};

export default Message;
