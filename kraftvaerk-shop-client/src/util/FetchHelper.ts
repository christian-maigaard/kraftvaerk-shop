export const formatResponse = (response: Response) => {
  if (!response.ok) {
    const error = { ...response, status: response.status, statusText: response.statusText };
    return Promise.reject(error);
  }
  return response.json();
};
