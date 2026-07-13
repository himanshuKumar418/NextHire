// Company registry mapping params to imported company datasets
import { getLocalItem } from '../../utils/localStorageHelper.js';

import infosys from './infosys.js';

export const companyRegistry = {
  infosys: infosys
};

export const getCompanyData = (companyId) => {
  return companyRegistry[companyId] || companyRegistry['infosys'];
};

export const getCompanySolvedQuestions = () => {
  return getLocalItem('company_solved_questions', []);
};

export const getCompanyProgress = (companyId) => {
  const company = getCompanyData(companyId);
  if (!company) return 0;
  
  const solved = getCompanySolvedQuestions();
  const companyQIds = company.codingQuestions.map((q) => q.id);
  const solvedCount = companyQIds.filter((id) => solved.includes(id)).length;
  
  return Math.round((solvedCount / company.codingQuestions.length) * 100);
};
