async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhilai';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '61d0a6de3emsh619e071ea6383e7p1acb76jsn507234ac33ce',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json(); // Parse the response as JSON
      let temp = result.temp;
      console.log(temp);
      document.getElementById('temperatureValue').innerText = `Temperature: ${temp} °C`;

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the async function
  fetchData();
