function runRobotCompare(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.log(`Moved to ${action.direction}`);
  }
}
function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
  let tot1=0;
  let tot2=0;
  let state = VillageState.random();
  for (i=0; i<100 ; i++){
    let turns = runRobotCompare(state ,robot1, memory1);
    tot1+=turns;
  } 
  for (i=0; i<100 ; i++){
    let turns = runRobotCompare(state, robot2, memory2);
    tot2+=turns;
  } 
  console.log('The average number of turns for routeRobot is ' + tot1/100 );
  console.log('The average number of turns for goalOrientedRobot is ' + tot2/100 );

}

compareRobots(routeRobot, [], goalOrientedRobot, []);
