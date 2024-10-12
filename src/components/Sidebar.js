import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = ({ setSelectedChat }) => {
  const chats = ['chat1', 'chat2'];

  return (
    <Box
      sx={{
        width: '30%',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ccc',
        
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '16px',backgroundColor:"#00A0AE",color:"white",paddingLeft:"10px" }}>
        CHAT SESSION
      </Typography>
      <TextField
      
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        sx: { height: '35px', padding: '0',marginLeft:"20px" }
      }}
    />
      <List>
        {chats.map((chat, index) => (
          <ListItem button key={index} onClick={() => setSelectedChat(chat)}>
            <ListItemText primary={chat} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
