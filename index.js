// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let driverName =  driver.split(' ')
    let driverObj = {}

    driverObj.firstName = driverName[0]
    driverObj.lastName = driverName[1]
    return driverObj
  })
}


function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
