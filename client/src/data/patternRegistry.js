// Dynamic pattern registry mapping URL params to imported datasets
import { getLocalItem } from '../utils/localStorageHelper.js';

import twoPointer from './arrays/twoPointer.js';
import slidingWindow from './arrays/slidingWindow.js';
import prefixSum from './arrays/prefixSum.js';
import kadane from './arrays/kadane.js';
import binarySearch from './arrays/binarySearch.js';

export const patternRegistry = {
  arrays: {
    'two-pointer': twoPointer,
    'sliding-window': slidingWindow,
    'prefix-sum': prefixSum,
    'kadane': kadane,
    'binary-search': binarySearch
  }
};

export const getPatternData = (category, pattern) => {
  const cat = patternRegistry[category] || patternRegistry['arrays'];
  return cat[pattern] || cat['two-pointer'];
};

// Global Local Storage Helper Actions
export const getSolvedQuestions = () => {
  return getLocalItem('dsa_solved_questions', []);
};

export const getPatternSolvedCount = (patternId) => {
  const solved = getSolvedQuestions();
  const patternData = patternRegistry.arrays[patternId];
  if (!patternData) return 0;
  return patternData.questions.filter((q) => solved.includes(q.id)).length;
};

export const getPatternProgress = (patternId) => {
  const solvedCount = getPatternSolvedCount(patternId);
  return Math.round((solvedCount / 15) * 100);
};

export const isPatternUnlocked = (patternId) => {
  // Development Mode: All patterns unlocked
  return true;

  /*
  if (patternId === 'two-pointer') return true;
  if (patternId === 'sliding-window') return getPatternProgress('two-pointer') >= 80;
  if (patternId === 'prefix-sum') return getPatternProgress('sliding-window') >= 80;
  if (patternId === 'kadane') return getPatternProgress('prefix-sum') >= 80;
  if (patternId === 'binary-search') return getPatternProgress('kadane') >= 80;
  return false;
  */
};

export const getOverallArraysProgress = () => {
  const p1 = getPatternSolvedCount('two-pointer');
  const p2 = getPatternSolvedCount('sliding-window');
  const p3 = getPatternSolvedCount('prefix-sum');
  const p4 = getPatternSolvedCount('kadane');
  const p5 = getPatternSolvedCount('binary-search');
  const totalSolved = p1 + p2 + p3 + p4 + p5;
  return Math.round((totalSolved / 75) * 100);
};

export const getPatternMastery = (progress) => {
  if (progress >= 100) return 'MASTERED';
  if (progress >= 60) return 'Advanced';
  if (progress >= 30) return 'Intermediate';
  return 'Beginner';
};
