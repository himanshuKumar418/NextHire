import React from 'react';
import { useParams } from 'react-router-dom';
import PatternLayout from '../components/PatternDsa/PatternLayout.jsx';
import PatternTemplate from '../components/PatternTemplate/PatternTemplate.jsx';
import { getPatternData } from '../data/patternRegistry.js';

const PatternDetail = ({ categoryProp, patternProp }) => {
  const params = useParams();
  const category = categoryProp || params.category;
  const pattern = patternProp || params.pattern;
  
  // Resolve pattern data dynamically
  const patternData = getPatternData(category, pattern);

  return (
    <PatternLayout>
      <PatternTemplate pattern={patternData} />
    </PatternLayout>
  );
};

export default PatternDetail;
