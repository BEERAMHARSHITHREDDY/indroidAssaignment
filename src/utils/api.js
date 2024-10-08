import fetch from 'isomorphic-unfetch';

const api = {
  getQuestions: async () => {
    const response = await fetch('https://example.com/questions');
    const data = await response.json();
    return data;
  },
};

export default api;