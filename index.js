// Code your solution here
function findMatching(drivers, name) {
    const lowercaseName = name.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseName);
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, query) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(query));
    return matchingDrivers;
  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example usage
  const drivers = [
    { name: 'Ada', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  
  const matchedDrivers = matchName(drivers, 'Ada');
  console.log(matchedDrivers);