var levels = [ null,
{
  level: 1,
  map: mapDef[1],
  scroll: scrollDef[1],
  setup: {
    startNode: 5,
    portalNode: 3,
    gemNodes: [],
    tokens: [
      {token: RUN   , count: 2},
      {token: SLIDE , count: 2}
    ],
    conditionals: []
  }
},
{
  level: 2,
  map: mapDef[2],
  scroll: scrollDef[1],
  setup: {
    startNode: 3,
    portalNode: 5,
    gemNodes: [0],
    tokens: [
      {token: RUN   , count: 2},
      {token: JUMP , count: 2}
    ],
    conditionals: []
  }
},
{
	level: 3,
	map: mapDef[3],
	scroll: scrollDef[1],
	setup: {
		startNode: 4,
		portalNode: 0,
		gemNodes: [1,5],
		tokens: [
			{token: RUN , count: 1},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 2}
		],
	conditionals: []
	}
},  
{
	level: 4,
	map: mapDef[4],
	scroll: scrollDef[2],
	setup: {
		startNode: 1,
		portalNode: 5,
		gemNodes: [3,4],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 2}
		],
		conditionals: []
	}
}, 
{
	level: 5,
	map: mapDef[5],
	scroll: scrollDef[1],
	setup: {
		startNode: 2,
		portalNode: 5,
		gemNodes: [3],
		tokens: [
			{token: RUN , count: 1},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 2}
		],
		conditionals: []
	}
},
{
	level: 6,
	map: mapDef[6],
	scroll: scrollDef[2],
	setup: {
		startNode: 5,
		portalNode: 0,
		gemNodes: [1,4],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 2}
		],
		conditionals: []
	}	
},
{
	level: 7,
	map: mapDef[7],
	scroll: scrollDef[2],
	setup: {
		startNode: 0,
		portalNode: 8,
		gemNodes: [],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 2},
			{token: JUMP , count: 1}
		],
		conditionals: []
	}
}, 
{
	level: 8,
	map: mapDef[8],
	scroll: scrollDef[1],
	setup: {
		startNode: 7,
		portalNode: 4,
		gemNodes: [],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 1}
		],
		conditionals: []
	}
}, 
{
	level: 9,
	map: mapDef[9],
	scroll: scrollDef[2],
	setup: {
		startNode: 9,
		portalNode: 4,
		gemNodes: [0,7],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 2},
			{token: JUMP , count: 1}
		],
		conditionals: []
	}
}, 
{
	level: 10,
	map: mapDef[10],
	scroll: scrollDef[3],
	setup: {
		startNode: 2,
		portalNode: 6,
		gemNodes: [],
		tokens: [
			{token: RUN , count: 3},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 2}
		],
		conditionals: []
	}
}, 
{
	level: 11,
	map: mapDef[1],
	scroll: scrollDef[1],
	setup: {
		startNode: 2,
		portalNode: 4,
		gemNodes: [1],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 1}
		],
		conditionals: []
	}
}, 
{
	level: 12,
	map: mapDef[2],
	scroll: scrollDef[2],
	setup: {
		startNode: 5,
		portalNode: 0,
		gemNodes: [],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 2},
			{token: JUMP , count: 1}
		],
		conditionals: []
	}
}, 
{
	level: 13,
	map: mapDef[3],
	scroll: scrollDef[2],
	setup: {
		startNode: 5,
		portalNode: 0,
		gemNodes: [4,4],
		tokens: [
			{token: RUN , count: 3},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 1}
		],
		conditionals: []
	}
}, 
{
	level: 14,
	map: mapDef[4],
	scroll: scrollDef[2],
	setup: {
		startNode: 0,
		portalNode: 4,
		gemNodes: [4,4,5],
		tokens: [
			{token: RUN , count: 1},
			{token: SLIDE , count: 2},
			{token: JUMP , count: 2}
		],
		conditionals: []
	}
}, 
{
	level: 15,
	map: mapDef[5],
	scroll: scrollDef[2],
	setup: {
		startNode: 4,
		portalNode: 0,
		gemNodes: [2,5],
		tokens: [
			{token: RUN , count: 2},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 2}
		],	
		conditionals: []
	}
},	
{
  level: 16,
  map: mapDef[6],
  scroll: scrollDef[4],
  setup: {
    startNode: 1,
    portalNode: 3,
    gemNodes: [2, 2, 2, 4, 4, 4],
    tokens: [
      {token: RUN   , count: 1},
      {token: SLIDE , count: 1},
      {token: JUMP  , count: 1}
    ],
    conditionals: [getConditional(6, 5, 1)]
  }
},
{
	level: 17,
	map: mapDef[7],
	scroll: scrollDef[3],
	setup: {
		startNode: 3,
		portalNode: 5,
		gemNodes: [0,4],
		tokens: [
			{token: RUN , count: 1},
			{token: SLIDE , count: 3},
			{token: JUMP , count: 2}
		],
		conditionals: []
	}
},
{
	level: 18,
	map: mapDef[8],
	scroll: scrollDef[3],
	setup: {
		startNode: 9,
		portalNode: 2,
		gemNodes: [11],
		tokens: [
			{token: RUN , count: 1},
			{token: SLIDE , count: 2},
			{token: JUMP , count: 3}
		],
		conditionals: []
	}
},
{
	level: 19,
	map: mapDef[9],
	scroll: scrollDef[3],
	setup: {
		startNode: 2,
		portalNode: 8,
		gemNodes: [0,4],
		tokens: [
			{token: RUN , count: 1},
			{token: SLIDE , count: 2},
			{token: JUMP , count: 3}
		],
		conditionals: []
	}
},
{
	level: 20,
	map: mapDef[10],
	scroll: scrollDef[5],
	setup: {
		startNode: 6,
		portalNode: 0,
		gemNodes: [2],
		tokens: [
			{token: RUN , count: 3},
			{token: SLIDE , count: 1},
			{token: JUMP , count: 3}
		],
		conditionals: []
	}
}	
];