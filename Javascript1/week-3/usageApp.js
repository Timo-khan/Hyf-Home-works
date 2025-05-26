
let activities = [];
let usageLimit = 120; 


function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}


function showStatus() { 
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalUsage = 0;
  
  for (let i = 0; i < activities.length; i++) {
    totalUsage += activities[i].duration;
  }

  if (totalUsage > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log("You have added " + activities.length + " activities. They amount to " + totalUsage + " min. of usage");
  }
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 45);
addActivity("23/7-18", "Instagram", 20);

showStatus();  

addActivity("23/7-18", "Netflix", 40);
showStatus();