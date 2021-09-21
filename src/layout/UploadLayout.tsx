import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useHistory } from 'react-router-dom';
import { storage } from '../plugins/firebase';

const UploadLayout: React.FC = (): JSX.Element => {
  const [imageAsFile, setImageAsFile] = useState<File | string>('');
  const [imageAsUrl, setImageAsUrl] = useState('');
  const history = useHistory();

  const handleImageAsFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    setImageAsFile(image);
  };

  const handleFireBaseUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // async magic goes here...
    if (imageAsFile === '') {
      history.replace('/');
    } else {
      const storageRef = ref(storage, `/dien-thoai-iphone-12-64gb/${(imageAsFile as File).name}`);
      uploadBytes(storageRef, imageAsFile as File).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setImageAsUrl(downloadURL);
        });
      });
    }
  };
  return (
    <>
      <form onSubmit={handleFireBaseUpload}>
        <input type="file" name="" id="" onChange={handleImageAsFile} />
        <button type="submit">Submit</button>
      </form>
      <a href={imageAsUrl} target="_blank" rel="noreferrer">
        {imageAsUrl}
      </a>
    </>
  );
};

export default UploadLayout;
