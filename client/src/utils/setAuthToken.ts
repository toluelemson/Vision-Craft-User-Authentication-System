const setAuthToken = (token: string) => {
  const config = {
    headers: {
      'Conetent-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  return config
}

export default setAuthToken
