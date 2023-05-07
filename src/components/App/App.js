import { useState, useEffect } from 'react';
import { Container } from './App.styles';
import { getImageCollection } from 'services/pixabayApi';
import { Searchbar } from 'components/Searchbar';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';

export const App = () => {
  const [imageCollection, setImageCollection] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const isRenderButton = imageCollection.length > 0;

  const setSearchValue = value => {
    const newSearch = value.trim();

    if (search !== newSearch) {
      setSearch(newSearch);
      setImageCollection([]);
      setPage(1);
    }
  };

  const appendPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    async function toNewRequest() {
      setIsLoading(true);
      const newImageCollection = await getImageCollection(search, page);

      if (page === 1) {
        setImageCollection(newImageCollection);
      } else {
        setImageCollection(prevCollection => [
          ...prevCollection,
          ...newImageCollection,
        ]);
      }

      setIsLoading(false);
    }

    if (search) {
      toNewRequest();
    }
  }, [search, page]);

  return (
    <Container>
      <Searchbar onSubmit={setSearchValue} />
      <ImageGallery imageCollection={imageCollection} />
      <Loader visible={isLoading} />
      {isRenderButton && <Button onClick={appendPage} />}
    </Container>
  );
};
