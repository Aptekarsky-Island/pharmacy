import React from 'react';

export default function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination-controls">
        <span className="pagination-number pagination-number--active">1</span>
        <span className="pagination-number">2</span>
        <span className="pagination-number">3</span>
        <span className="pagination-dots">...</span>
        <span className="pagination-number">13</span>
      </div>
    </div>
  );
}