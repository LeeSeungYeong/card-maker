import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthServide from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './compoments/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthServide();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);