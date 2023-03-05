import React, { useState, useEffect } from "react";

const messages = ['Hello', 'Hola', 'Zdravo', 'Pershendetje',];

export default function Test() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((messageIndex + 1) % messages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [messageIndex]);

  useEffect(() => {
    setCurrentMessage(messages[messageIndex]);
  }, [messageIndex]);

  return (
    <>



<div>{currentMessage}</div>


    </>
  );
}
