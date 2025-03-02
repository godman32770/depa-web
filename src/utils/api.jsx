import { getChatResponse } from '../utils/api.js';

const handleSend = async () => {
  if (input.trim()) {
    setMessages([...messages, { sender: 'user', text: input }]);
    const response = await getChatResponse(input);
    setMessages(prev => [...prev, { sender: 'bot', text: response.reply }]);
    setInput('');
  }
};