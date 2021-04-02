import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    '1': {
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

    '2': {
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

    '3': {
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
  });

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

  const CreateOrupdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });


  }

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={CreateOrupdateCard} updateCard={CreateOrupdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;