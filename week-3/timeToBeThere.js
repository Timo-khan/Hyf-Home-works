const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };


  function calculateTravelTime(info) {
    const totalTimeInHours = info.destinationDistance / info.speed;
    const hours = Math.floor(totalTimeInHours);
    const minutes = Math.round((totalTimeInHours - hours) * 60);
    
    return hours + " hours and" + " " + minutes + " minutes";
  }
  
  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime); // Output will be: "8 hours and 40 minutes"