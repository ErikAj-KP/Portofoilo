import React, { useState, useEffect } from 'react';
import '../styles/Language.css';

const Language = () => {
  const [language, setLanguage] = useState('japanese');

  const content = {
    japanese: {
      greeting: "こんにちは！",
      introduction: "私はプログラマーです。",
      passion: "ウェブ開発とソフトウェア開発に情熱を持っています。",
      skills: "新しい技術を学び、創造的な解決策を見つけることが大好きです。",
      teamwork: "チームでの協力も得意としています。"
    },
    english: {
      greeting: "Hello!",
      introduction: "I am a programmer.",
      passion: "I am passionate about web development and software development.",
      skills: "I love learning new technologies and finding creative solutions.",
      teamwork: "I also enjoy working in teams."
    },
    portuguese: {
      greeting: "Olá!",
      introduction: "Eu sou um programador.",
      passion: "Eu sou apaixonado por desenvolvimento web e desenvolvimento de software.",
      skills: "Este é o site secreto do Stig.",
      teamwork: "Stig sabe de tudo."
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguage(prev => {
        if (prev === 'japanese') return 'english';
        if (prev === 'english') return 'portuguese';
        return 'japanese';
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`language-content ${language}-theme`}>
      <div className="text-content">
        <h2>{content[language].greeting}</h2>
        <p>{content[language].introduction}</p>
        <p>{content[language].passion}</p>
        <p>{content[language].skills}</p>
        <p>{content[language].teamwork}</p>
      </div>
    </div>
  );
};

export default Language;




