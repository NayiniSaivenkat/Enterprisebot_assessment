import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

const initialChatData = {
  chat1: [
    { from: { type: 'user1' }, msg: { message: 'Hi, how can I help you?' } },
    { from: { type: 'user2' }, msg: { message: 'I have really slow internet.' } },
    { from: { type: 'user1' }, msg: { message: 'Sure! Could you confirm your email?' } },
    { from: { type: 'user2' }, msg: { message: 'john.mayers@gmail.com' } },
  ],
  chat2: [
    { from: { type: 'user1' }, msg: { message: 'Hi, how can I help you?' } },
    { from: { type: 'user2' }, msg: { message: 'My computer is not working.' } },
    { from: { type: 'user1' }, msg: { message: 'Sure! Could you confirm your email?' } },
    { from: { type: 'user2' }, msg: { message: 'tony.stark@gmail.com' } },
  ],
};

function App() {
  const [selectedChat, setSelectedChat] = useState('chat1');
  const [chatData, setChatData] = useState(initialChatData);

  const addNewMessage = (chatId, newMsg) => {
    setChatData((prevChatData) => ({
      ...prevChatData,
      [chatId]: [...prevChatData[chatId], { from: { type: 'user2' }, msg: { message: newMsg } }],
    }));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar setSelectedChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} chatData={chatData} addNewMessage={addNewMessage} />
    </Box>
  );
}

export default App;



