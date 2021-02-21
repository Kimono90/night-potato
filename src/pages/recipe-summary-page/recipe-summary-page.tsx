import React from 'react';
import { useParams } from 'react-router-dom';
import { IRouteParams } from '../../models-and-constants/IRouteParams';

export default function RecipeSummaryPage() {
  const { recipeId } = useParams<IRouteParams>();

  return <div className="summary-page">{recipeId}</div>;
}
