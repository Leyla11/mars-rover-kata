// Rover Object Goes Here
// ======================
//Iteration 1 | The Rover Object
const rover = {
  //coordenadas de un plano cartesiano
  x: 0,
  y: 0,
  direction: 'N',
  travelLog: [] //Iteration 5 | Tracking
}

// ======================
//Iteration 2 | Turning the Rover
//funciones para girar el rover
function turnLeft(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'W' //mira hacia el norte, giro hacia el oeste
  } else if (rover.direction === 'W') {
    rover.direction = 'S' //mira hacia el oeste y gira hacia el sur
  } else if (rover.direction === 'S') {
    rover.direction = 'E' //mira hacia el sur y gira hacia el este
  } else if (rover.direction === 'E') {
    rover.direction = 'N' //mira hacia el este y gira hacia el norte
  } else {
    //Bonus 3 | Validate Inputs no hace nada c/datos invalidos
    console.log('Invalid direction')
    return
  }
  //aqui estamos diciendo hacia donde giramos con una concatenacion
  console.log('Turned to ' + rover.direction)
}
function turnRight(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'E'
  } else if (rover.direction === 'E') {
    rover.direction = 'S'
  } else if (rover.direction === 'S') {
    rover.direction = 'W'
  } else if (rover.direction === 'W') {
    rover.direction = 'N'
  } else {
    //Bonus 3 | Validate Inputs no hace nada c/datos invalidos
    console.log('Invalid direction')
    return
  }
  //aqui estamos diciendo hacia donde giramos con una concatenacion
  console.log('Turned to ' + rover.direction)
}

//Iteration 3 | Moving the Rover
//logica que mueve el rover
function moveForward(rover) {
  if (rover.direction === 'N') {
    //manipulo el eje de las "y"
    if (rover.y === 0) {
      //se esta contando de arriba hacia abajo
      console.log('Can not move up')
      return //Bonus 1 | Enforce Boundaries para que no pase limite
    }
    track(rover) //Iteration 5 | Tracking para guardar historial
    rover.y -= 1 //se esta restando de abajo hacia arriba
  } else if (rover.direction === 'S') {
    //manipulo el eje de las "y"
    if (rover.y === 9) {
      //se esta contando de abajo hacia arriba
      console.log('Can not move down')
      return //Bonus 1 | Enforce Boundaries para que no pase limite
    }
    track(rover) //Iteration 5 | Tracking para guardar historial
    rover.y += 1 //se esta sumando de arriba hacia abajo
  } else if (rover.direction === 'W') {
    //manipulo el eje de las "x"
    if (rover.x === 0) {
      console.log('Can not move left')
      return //Bonus 1 | Enforce Boundaries para que no pase limite
    }
    track(rover) //Iteration 5 | Tracking para guardar historial
    //se mueve de derecha a izquierda
    rover.x -= 1
  } else if (rover.direction === 'E') {
    //manipulo el eje de las "x"
    if (rover.x === 9) {
      console.log('Can not move right')
      return //Bonus 1 | Enforce Boundaries para que no pase limite
    }
    track(rover) //Iteration 5 | Tracking para guardar historial
    //se mueve de izquierda a derecha
    rover.x += 1
  } else {
    //Bonus 3 | Validate Inputs no hace nada c/datos invalidos
    console.log('Invalid direction')
    return
  }
  //aqui estamos diciendo hacia donde nos movemos con una concatenacion
  console.log('Moved to ' + rover.x + ',' + rover.y)
}

// Iteration 4 | Commands
// mi funcion recibe un string con los comandos
function runCommands(commands) {
  //for para ver caracter x caracter de un string
  for (let i = 0; i < commands.length; i += 1) {
    const command = commands[i]
    if (command === 'f') {
      moveForward(rover) //comando f hacia frente
    } else if (command === 'r') {
      turnRight(rover) //comando r hacia derecha
    } else if (command === 'l') {
      turnLeft(rover) //comano l hacia la izqu
    } else if (command === 'b') {
      moveBackward(rover) //Bonus 2 | Move Backwards comand b atras
    } else {
      //Bonus 3 | Validate Inputs no hace nada c/datos invalidos
      console.log('Invalid command')
    }
  }
}

//Iteration 5 | Tracking
//guarda el historial del viaje haciendo push en el travelLog
//mi funcion recibe al rover
function track(rover) {
  const log = { x: rover.x, y: rover.y }
  rover.travelLog.push(log)
}

//Bonus 2 | Move Backwards
//reutilice el codigo para poder cambiar la direccion
//puse la direccion contraria para que se vaya de reversa
function moveBackward(rover) {
  // guardando la direccion original
  const original = rover.direction
  if (rover.direction === 'N') {
    rover.direction = 'S'
  } else if (rover.direction === 'S') {
    rover.direction = 'N'
  } else if (rover.direction === 'W') {
    rover.direction = 'E'
  } else if (rover.direction === 'E') {
    rover.direction = 'W'
  } else {
    //Bonus 3 | Validate Inputs no hace nada c/datos invalidos
    console.log('Invalid direction')
    return
  }
  moveForward(rover) //lo estamos moviendo como marca arriba
  rover.direction = original //restaura la dir original
}

runCommands('rffrfflfrff')
