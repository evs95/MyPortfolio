import React from 'react';
import Navbar from "./Navbar";

function Header({ currentPage, handlePageChange }) {

  return (
    <header>
      <section className="subheading" id="subtitle">
            <span><strong>Venkata Sameera E</strong></span>
                <Navbar  currentPage={currentPage} handlePageChange={handlePageChange}/>
        </section>
    </header>
  );
}

export default Header;
