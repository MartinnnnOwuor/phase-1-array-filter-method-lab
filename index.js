
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  }
  
  const driverNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

  const namesThatMatch = findMatching(driverNames, 'bobby');
  console.log(namesThatMatch);


function fuzzyMatch(drivers, strings) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(strings.toLowerCase()));
  }
  
  
  const driverName = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const groupedDrivers = fuzzyMatch(driverName, 'Sa');
  console.log(matchedDrivers); 


  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  
  const driversObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  const matchedDrivers = matchName(driversObjects, 'Bobby');
  console.log(groupedDrivers);