import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'SeungYeong',
      company: 'null',
      theme: 'dark',
      title: 'backsu',
      email: 'lsyeong93@naver.com',
      message: 'go for it',
      fileName: 'seung',
      fileURL: null,
    },
    {
      id: '2',
      name: 'SeungYeong',
      company: 'null',
      theme: 'light',
      title: 'backsu',
      email: 'lsyeong93@naver.com',
      message: 'go for it',
      fileName: 'seung',
      fileURL: 'seung.png',
    },
    {
      id: '3',
      name: 'SeungYeong',
      company: 'null',
      theme: 'colorful',
      title: 'backsu',
      email: 'lsyeong93@naver.com',
      message: 'go for it',
      fileName: 'seung',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;