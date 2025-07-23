import React, { useRef, useEffect, useState } from "react";
import "./VolunteerDashboard.css";

const mockMessages = [
    { sender: "Coordinator", text: "Welcome to the group chat!" },
    { sender: "You", text: "Hi everyone!" },
    { sender: "Priya", text: "Looking forward to the next audit." }
];

export default function GroupChatPage() {
    const [messages, setMessages] = useState(mockMessages);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: "You", text: input }]);
            setInput("");
        }
    };

    return (
        <div className="chat-page">
            <h2 className="page-title">💬 Group Chat</h2>
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div className={`chat-message ${msg.sender === "You" ? "chat-message-you" : ""}`} key={idx}>
                        <span className="chat-sender">{msg.sender}:</span> {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-bar">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                />
                <button className="chat-send-btn" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
} 