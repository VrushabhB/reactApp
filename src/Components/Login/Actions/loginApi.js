export const postApi = (url, data = {}) => {
  return callAPI(url, data);
};

export const callAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};
