import React, { useState, useEffect } from 'react';
import './events.css';
import { PageComponent, DBEvent, Footer, DBImageEvent, DbImageEvent } from '../../components';
import axios from 'axios';
import { Link, Routes, Route, useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import jsonData from '../../jsonData.json';

const styles = {
  textDecoration: 'none',
  color: 'var(--color-white)',
  fontFamily: 'var(--font-family)'
};

const PAGE_SIZE = 8; // Number of events to display per page

const Events = () => {
  const [events, setEvents] = useState(jsonData.events);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { eventName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleEventClick = (eventName) => {
    const previousPage = currentPage; // Store the current page number
    navigate(`/events/${eventName}`, { state: { previousPage } });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredEvents = jsonData.events.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEvents(filteredEvents);
    setCurrentPage(1);
  }, [searchTerm]);

  const renderEvents = () => {
    if (events.length === 0) {
      return <div>No results found.</div>;
    } else {
      const startIndex = (currentPage - 1) * PAGE_SIZE;
      const endIndex = startIndex + PAGE_SIZE;
      const eventsToDisplay = events.slice(startIndex, endIndex);

      return eventsToDisplay.map((event) => (
        <Link to={`/events/${event.name}`} key={event.name} style={styles} onClick={() => handleEventClick(event.name)}>
          <DbImageEvent name={event.name} />
        </Link>
      ));
    }
  };

  const EventsMap = () => <div className="bt_events-eventsmap">{renderEvents()}</div>;

  const totalPages = Math.ceil(events.length / PAGE_SIZE);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    const previousPage = location.state?.previousPage || 1; // Retrieve the previous page number from location state
    setCurrentPage(previousPage);
  }, [location]);

  return (
    <div className="bt_events">
      <PageComponent breadcrumb="Home/Events" name="Events Page" />
      <div className="search-bar">
        <input type="text" placeholder="Search events" value={searchTerm} onChange={handleSearchChange} />
      </div>
      <Routes>
        <Route path="/events/:eventName" element={<DBEvent urlPage={currentPage} />} />
      </Routes>
      <EventsMap />
      <div className="pagination-features">
        <button className="button" disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous
        </button>
        <div className="pagination">
          Page {currentPage} of {totalPages}
        </div>
        <button className="button" disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
