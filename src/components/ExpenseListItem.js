import React from 'react';
import { Link } from 'react-router-dom';

export default ({ createdAt, description, amount, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);