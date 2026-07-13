export const getScopedKey = (key) => {
  try {
    const userStr = localStorage.getItem('user');
    if (!userStr) return key;
    const user = JSON.parse(userStr);
    const userId = user?._id || user?.id || 'anonymous';
    return `${userId}_${key}`;
  } catch (e) {
    return key;
  }
};

export const getLocalItem = (key, defaultValue = null) => {
  const value = localStorage.getItem(getScopedKey(key));
  if (value === null) return defaultValue;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export const setLocalItem = (key, value) => {
  const stringified = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(getScopedKey(key), stringified);
};

export const removeLocalItem = (key) => {
  localStorage.removeItem(getScopedKey(key));
};
