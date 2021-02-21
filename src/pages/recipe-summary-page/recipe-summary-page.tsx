import React from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeSummaryPage() {
  const { id } = useParams<any>(); // solve this issue because its weird

  return <div className="summary-page">{id}</div>;
}
