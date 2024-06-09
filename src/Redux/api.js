export const fetchData = async() => {
    return await fetch('https://mocki.io/v1/dc07c60a-fb0b-4fb1-8b9f-190e4332d29e', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
       
        return res;
      })
      .catch(res => {
        return res.error;
      });
  };