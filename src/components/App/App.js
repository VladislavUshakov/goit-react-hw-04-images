import { Component } from 'react';
import { Container } from './App.styles';
import { getImageCollection } from 'services/pixabayApi';
import { Searchbar } from 'components/Searchbar';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';

export class App extends Component {
  state = {
    imageCollection: [],
    search: '',
    isLoading: false,
    page: 1,
  };

  componentDidUpdate = async (_, prevState) => {
    const { search, page } = this.state;

    if (prevState.search !== search) {
      this.setState({ page: 1, isLoading: true, imageCollection: [] });
      const imageCollection = await getImageCollection(search, page);
      this.setState({ imageCollection, isLoading: false });
    }

    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      const newImageCollection = await getImageCollection(search, page);
      this.setState(
        ({ imageCollection: currentImageCollection, isLoading }) => ({
          imageCollection: [...currentImageCollection, ...newImageCollection],
          isLoading: false,
        })
      );
    }
  };

  setSearchValue = newValue => {
    this.setState({ search: newValue.trim() });
  };

  appendPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { imageCollection, isLoading } = this.state;
    const isRenderButton = imageCollection.length > 0;

    return (
      <Container>
        <Searchbar onSubmit={this.setSearchValue} />
        <ImageGallery imageCollection={imageCollection} />
        <Loader visible={isLoading} />
        {isRenderButton && <Button onClick={this.appendPage} />}
      </Container>
    );
  }
}
