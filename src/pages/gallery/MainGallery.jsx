import React, { useState, useEffect } from 'react';
import { Navbar, Footer, PageComponent } from '../../components';
import './maingallery.css';
import flexvid2 from '../../assets/flexvid2.mp4';
import ReactPlayer from 'react-player';
const MainGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8; // Number of images to display per page

  const images = require.context('../../assets/gallerywebp');
  const imageList = images.keys().map(image => images(image));

  useEffect(() => {
    // Logic to set gallery images based on pagination
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = imageList.slice(startIndex, endIndex);
    setGalleryImages(pageImages);
  }, [currentPage]);

  const totalPages = Math.ceil(imageList.length / imagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bt_maingallery">
      <PageComponent breadcrumb="Home/Gallery" name="Gallery" />
      <div className="bt_maingallery-video">
        <ReactPlayer url={flexvid2} controls={true} width="90%"/>
      </div>
      <div className="bt_maingallery-pic">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`}  srcSet={`${image} 320w`} />
        ))}
      </div>
      <div className="pagination-features">
        <button className="button" onClick={handlePreviousPage}>
          Previous
        </button>
        <div className="pagination">Page {currentPage} of {totalPages}</div>
        <button className="button" onClick={handleNextPage}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MainGallery;
