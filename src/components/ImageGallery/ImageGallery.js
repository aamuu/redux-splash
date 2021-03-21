import React, { Component } from 'react';
import Image from '../Image/Image';
import { connect } from 'react-redux';
import { loadImages } from '../../actions/image';
class ImageGallery extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { gallery } = this.props.images;
    return (
      <div className='container'>
        <div className='row'>
          {gallery.map((image) => (
            <Image
              id={image.id}
              urls={image.urls.small}
              user={image.user.username}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.images,
});

export default connect(mapStateToProps, { loadImages })(ImageGallery);
