"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";
const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9c53dd30-2ab6-4248-b0b3-fbb6894f9056");
  }, []);
  return null;
};

export default CrispChat;
