import React, { useState } from 'react';
import { Box, TextField, Button,Typography } from '@mui/material';
import Message from './Message';

const ChatWindow = ({ selectedChat, chatData, addNewMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      addNewMessage(selectedChat, newMessage); // Add the new message to the chat data
      setNewMessage(''); // Clear the input field after sending
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        
      }}
    >
      <Box>
      <Typography variant="h5" sx={{ marginBottom: '16px',backgroundColor:"#00A0AE",color:"white",paddingLeft:"10px" }}>
        CHAT DETAILS
      </Typography>
      </Box>
      {/* Message List */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', marginBottom: '16px' }}>
        {chatData[selectedChat].map((message, index) => (
          <Message
            key={index}
            text={message.msg.message}
            isSentByUser={message.from.type === 'user2'}
          />
        ))}
      </Box>

      {/* Input Field */}
      <Box sx={{ display: 'flex', alignItems: 'center',margin:"10px" }}>
        <TextField
          fullWidth
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginLeft: '8px',backgroundColor:"#00A0AE" }}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;

