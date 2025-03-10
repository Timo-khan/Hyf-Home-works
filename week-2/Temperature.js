function whatToWear(temperature) {
    if (temperature >= 35) {
      return "It's really hot! Wear lightweight, breathable clothes and stay cool.";
    } else if (temperature >= 19 ) {
      return "It's warm! A t-shirt and shorts would be perfect.";
    } else if (temperature >= 11 && temperature < 18) {
      return "It's a bit chill! Wear a light jacket or sweater.";
    } else if (temperature >= 0 && temperature < 12) {
      return "It's cold! Wear a warm jacket, gloves, and a scarf.";
    } else {
      return "It's freezing! wear a heavy coat, hat, and gloves.";
    }
  }
  console.log(whatToWear(30));