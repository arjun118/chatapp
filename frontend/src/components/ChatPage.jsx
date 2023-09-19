import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    try {
      let chats = await axios.get("/chats");
      setChats(chats.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <p key={chat.id}> {chat.sender}</p>
      ))}
    </div>
  );
};

export default ChatPage;
