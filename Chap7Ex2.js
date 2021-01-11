function yourRobot({place, parcels}, route) {
  let parcelRoutes = [];
  if (route.length == 0) {
    for(let p of parcels){
  	  if (p.place != place) {
  	    route = findRoute(roadGraph, place, p.place);
  	  } else {
  	    route = findRoute(roadGraph, place, p.address);
  	  }
      parcelRoutes.push(route);
  	}
 }

 
  for(let q=0; q< parcelRoutes.length-1; q++){
        if(parcelRoutes[q].length === parcelRoutes[q+1].length){
            if( parcelRoutes[q][0] !== place){
          		route = parcelRoutes[q] ;
            }
            else {
              route = parcelRoutes[q+1];
            }  
        }
        else if(parcelRoutes[q].length < parcelRoutes[q+1].length){
          route = parcelRoutes[q];
        }
        else {
          route =  parcelRoutes[q+1];
        }
  
  }
  return {direction: route[0], memory: route.slice(1)};
  
}

compareRobots(yourRobot, [], goalOrientedRobot, []);
