export default {
	SUPER_TROOPS: [
		{
			name: 'Super Barbarian',
			id: 26,
			original: 'Barbarian',
			minOriginalLevel: 8,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 5
		},
		{
			name: 'Sneaky Goblin',
			id: 55,
			original: 'Goblin',
			minOriginalLevel: 7,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 3
		},
		{
			name: 'Super Giant',
			id: 29,
			original: 'Giant',
			minOriginalLevel: 9,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 10
		},
		{
			name: 'Super Wall Breaker',
			id: 28,
			original: 'Wall Breaker',
			minOriginalLevel: 7,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 8
		},
		{
			name: 'Super Archer',
			id: 27,
			original: 'Archer',
			minOriginalLevel: 8,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 12
		},
		{
			name: 'Super Witch',
			id: 66,
			original: 'Witch',
			minOriginalLevel: 5,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 40
		},
		{
			name: 'Inferno Dragon',
			id: 63,
			original: 'Baby Dragon',
			minOriginalLevel: 6,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 15
		},
		{
			name: 'Super Valkyrie',
			id: 64,
			original: 'Valkyrie',
			minOriginalLevel: 7,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 20
		},
		{
			name: 'Super Minion',
			id: 84,
			original: 'Minion',
			minOriginalLevel: 8,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 12
		},
		{
			name: 'Super Wizard',
			id: 83,
			original: 'Wizard',
			minOriginalLevel: 9,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 10
		},
		{
			name: 'Ice Hound',
			id: 76,
			original: 'Lava Hound',
			minOriginalLevel: 5,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 40
		},
		{
			name: 'Rocket Balloon',
			id: 57,
			original: 'Balloon',
			minOriginalLevel: 8,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 8
		},
		{
			name: 'Super Bowler',
			id: 80,
			original: 'Bowler',
			minOriginalLevel: 4,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 30
		},
		{
			name: 'Super Dragon',
			id: 81,
			original: 'Dragon',
			minOriginalLevel: 7,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 40
		},
		{
			name: 'Super Miner',
			id: 56,
			original: 'Miner',
			minOriginalLevel: 7,
			village: 'home',
			duration: 259200,
			cooldown: 259200,
			resource: 'Dark Elixir',
			resourceCost: 25000,
			housingSpace: 24
		}
	],
	TROOPS: [
		{
			id: 0,
			name: 'Barbarian',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 1,
				cost: 100,
				time: 10,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 1
			},
			trainingTime: 5,
			regenerationTimes: [],
			dps: [8, 11, 14, 18, 23, 26, 30, 34, 38, 42, 45],
			upgrade: {
				cost: [20000, 60000, 200000, 650000, 1400000, 2100000, 2800000, 5600000, 14000000, 16000000],
				time: [7200, 18000, 43200, 86400, 129600, 216000, 259200, 604800, 1123200, 1209600],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11]
		},
		{
			id: 1,
			name: 'Archer',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 500,
				time: 60,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 2
			},
			trainingTime: 6,
			regenerationTimes: [],
			dps: [7, 9, 12, 16, 20, 22, 25, 28, 31, 34, 37],
			upgrade: {
				cost: [30000, 80000, 300000, 800000, 2000000, 2500000, 3200000, 6300000, 14500000, 16000000],
				time: [10800, 21600, 43200, 86400, 129600, 216000, 302400, 604800, 1123200, 1209600],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11]
		},
		{
			id: 2,
			name: 'Goblin',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 5000,
				time: 3600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 4
			},
			trainingTime: 7,
			regenerationTimes: [],
			dps: [11, 14, 19, 24, 32, 42, 52, 62],
			upgrade: {
				cost: [45000, 175000, 500000, 1200000, 2000000, 3000000, 6300000],
				time: [18000, 32400, 43200, 86400, 129600, 302400, 691200],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8]
		},
		{
			id: 3,
			name: 'Giant',
			housingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 2500,
				time: 600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 3
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [11, 14, 19, 24, 31, 43, 55, 62, 70, 78, 86],
			upgrade: {
				cost: [40000, 150000, 500000, 1200000, 2000000, 3000000, 3500000, 6300000, 10000000, 16500000],
				time: [14400, 28800, 43200, 86400, 172800, 302400, 475200, 777600, 972000, 1382400],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11]
		},
		{
			id: 4,
			name: 'Wall Breaker',
			housingSpace: 2,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 3,
				cost: 20000,
				time: 28800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 5
			},
			trainingTime: 15,
			regenerationTimes: [],
			dps: [6, 10, 15, 20, 43, 55, 66, 75, 86, 94, 102],
			upgrade: {
				cost: [100000, 250000, 600000, 1200000, 2500000, 4200000, 7300000, 10000000, 15200000, 16500000],
				time: [21600, 43200, 64800, 86400, 183600, 302400, 604800, 950400, 1296000, 1382400],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11]
		},
		{
			id: 5,
			name: 'Balloon',
			housingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 4,
				cost: 120000,
				time: 43200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 6
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [25, 32, 48, 72, 108, 162, 198, 236, 256, 276],
			upgrade: {
				cost: [125000, 400000, 800000, 1500000, 2750000, 4500000, 7700000, 10500000, 17000000],
				time: [28800, 43200, 64800, 86400, 302400, 453600, 820800, 1036800, 1468800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10]
		},
		{
			id: 6,
			name: 'Wizard',
			housingSpace: 4,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 270000,
				time: 64800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [50, 70, 90, 125, 170, 185, 200, 215, 230, 245, 260],
			upgrade: {
				cost: [120000, 320000, 620000, 1200000, 2200000, 3500000, 5000000, 6500000, 10500000, 17200000],
				time: [28800, 43200, 64800, 86400, 172800, 302400, 453600, 756000, 950400, 1382400],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11]
		},
		{
			id: 7,
			name: 'Healer',
			housingSpace: 14,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 6,
				cost: 800000,
				time: 86400,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 8
			},
			trainingTime: 120,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [450000, 900000, 2700000, 4200000, 9800000, 16000000],
				time: [43200, 86400, 172800, 604800, 907200, 1382400],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 7]
		},
		{
			id: 8,
			name: 'Dragon',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 1200000,
				time: 129600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 9
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [140, 160, 180, 210, 240, 270, 310, 330, 350],
			upgrade: {
				cost: [1000000, 2000000, 3000000, 3800000, 4900000, 7000000, 11000000, 17500000],
				time: [64800, 129600, 259200, 453600, 475200, 864000, 1036800, 1468800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 9]
		},
		{
			id: 9,
			name: 'P.E.K.K.A',
			housingSpace: 25,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1700000,
				time: 216000,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 10
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [260, 290, 320, 360, 410, 470, 540, 610, 680],
			upgrade: {
				cost: [1200000, 1800000, 2800000, 3200000, 4200000, 5200000, 7700000, 10500000],
				time: [43200, 86400, 172800, 302400, 410400, 518400, 864000, 972000],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 3, 4, 6, 7, 8, 9, 9, 9]
		},
		{
			id: 10,
			name: 'Minion',
			housingSpace: 2,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 200000,
				time: 28800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 1
			},
			trainingTime: 18,
			regenerationTimes: [],
			dps: [38, 41, 44, 47, 50, 54, 58, 62, 66, 70, 74],
			upgrade: {
				cost: [3000, 7000, 15000, 25000, 35000, 63000, 105000, 188000, 285000, 310000],
				time: [28800, 57600, 86400, 172800, 302400, 432000, 842400, 993600, 1339200, 1425600],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9, 10, 11]
		},
		{
			id: 11,
			name: 'Hog Rider',
			housingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 600000,
				time: 86400,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 2
			},
			trainingTime: 45,
			regenerationTimes: [],
			dps: [60, 70, 80, 92, 105, 118, 135, 148, 161, 174, 187],
			upgrade: {
				cost: [5000, 9000, 16000, 30000, 43000, 70000, 105000, 168000, 210000, 305000],
				time: [36000, 72000, 108000, 172800, 302400, 453600, 691200, 842400, 1036800, 1404000],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 9, 10, 11, 11]
		},
		{
			id: 12,
			name: 'Valkyrie',
			housingSpace: 8,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1000000,
				time: 129600,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 3
			},
			trainingTime: 90,
			regenerationTimes: [],
			dps: [94, 106, 119, 133, 148, 163, 178, 193, 208],
			upgrade: {
				cost: [8000, 12000, 25000, 38000, 63000, 123000, 195000, 295000],
				time: [86400, 172800, 259200, 367200, 453600, 669600, 1036800, 1404000],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9, 9]
		},
		{
			id: 13,
			name: 'Golem',
			housingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1600000,
				time: 172800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 4
			},
			trainingTime: 300,
			regenerationTimes: [],
			dps: [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
			upgrade: {
				cost: [10000, 20000, 30000, 43000, 53000, 77000, 112000, 140000, 200000, 300000, 330000],
				time: [108000, 216000, 324000, 367200, 432000, 475200, 626400, 842400, 1036800, 1382400, 1468800],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 7, 9, 10, 11, 12]
		},
		{
			id: 15,
			name: 'Witch',
			housingSpace: 12,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2200000,
				time: 302400,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 5
			},
			trainingTime: 120,
			regenerationTimes: [],
			dps: [100, 110, 140, 160, 180, 200],
			upgrade: {
				cost: [50000, 68000, 90000, 140000, 340000],
				time: [345600, 410400, 583200, 864000, 1512000],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 6]
		},
		{
			id: 17,
			name: 'Lava Hound',
			housingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2900000,
				time: 388800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 6
			},
			trainingTime: 300,
			regenerationTimes: [],
			dps: [10, 12, 14, 16, 18, 20],
			upgrade: {
				cost: [35000, 50000, 85000, 135000, 200000],
				time: [216000, 367200, 540000, 864000, 1036800],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 6, 6]
		},
		{
			id: 22,
			name: 'Bowler',
			housingSpace: 6,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 4000000,
				time: 561600,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 7
			},
			trainingTime: 60,
			regenerationTimes: [],
			dps: [60, 70, 80, 90, 96, 102],
			upgrade: {
				cost: [65000, 88000, 140000, 210000, 305000],
				time: [302400, 432000, 734400, 950400, 1447200],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 6]
		},
		{
			id: 23,
			name: 'Baby Dragon',
			housingSpace: 10,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2600000,
				time: 345600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 11
			},
			trainingTime: 90,
			regenerationTimes: [],
			dps: [75, 85, 95, 105, 115, 125, 135, 145],
			upgrade: {
				cost: [2000000, 2500000, 3400000, 4200000, 6300000, 9000000, 16000000],
				time: [172800, 302400, 432000, 540000, 712800, 907200, 1360800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 8]
		},
		{
			id: 24,
			name: 'Miner',
			housingSpace: 6,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 3700000,
				time: 475200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 12
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [80, 88, 96, 104, 112, 120, 128, 136, 144],
			upgrade: {
				cost: [2500000, 3200000, 3800000, 5000000, 6500000, 10000000, 16500000, 18500000],
				time: [187200, 302400, 345600, 604800, 777600, 1015200, 1382400, 1468800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 6, 7, 8, 9]
		},
		{
			id: 26,
			name: 'Super Barbarian',
			housingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 1,
				cost: 100,
				time: 10,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 1
			},
			trainingTime: 25,
			regenerationTimes: [],
			dps: [180, 200, 220, 240],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 8,
			seasonal: false,
			levels: [8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 27,
			name: 'Super Archer',
			housingSpace: 12,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 500,
				time: 60,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 2
			},
			trainingTime: 72,
			regenerationTimes: [],
			dps: [120, 132, 144, 156],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 8,
			seasonal: false,
			levels: [0, 8, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 28,
			name: 'Super Wall Breaker',
			housingSpace: 8,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 3,
				cost: 20000,
				time: 28800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 5
			},
			trainingTime: 60,
			regenerationTimes: [],
			dps: [78, 100, 120, 130, 140],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 7,
			seasonal: false,
			levels: [0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 29,
			name: 'Super Giant',
			housingSpace: 10,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 2500,
				time: 600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 3
			},
			trainingTime: 60,
			regenerationTimes: [],
			dps: [130, 140, 150],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 9,
			seasonal: false,
			levels: [0, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 30,
			name: 'Ice Wizard',
			housingSpace: 4,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 270000,
				time: 64800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [40, 56, 72, 100, 136, 148, 160, 172, 184, 196],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]
		},
		{
			id: 31,
			name: 'Raged Barbarian',
			housingSpace: 4,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 1,
				cost: 1000,
				time: 0,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 1
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [45, 45, 58, 58, 70, 70, 83, 83, 93, 93, 103, 103, 112, 112, 119, 119, 126, 126, 133, 133],
			upgrade: {
				cost: [
					3500, 7000, 10000, 90000, 180000, 300000, 330000, 700000, 900000, 1000000, 1200000, 2000000, 2200000, 3000000, 3200000,
					3800000, 4000000, 4600000, 5200000
				],
				time: [
					300, 900, 18000, 36000, 54000, 72000, 86400, 129600, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400,
					561600, 561600
				],
				resource: 'Builder Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 32,
			name: 'Sneaky Archer',
			housingSpace: 3,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 4000,
				time: 60,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 2
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [60, 60, 66, 66, 72, 72, 79, 79, 86, 86, 95, 95, 104, 104, 112, 112, 119, 119, 125, 125],
			upgrade: {
				cost: [
					5000, 8000, 12000, 100000, 200000, 320000, 350000, 800000, 1000000, 1100000, 1300000, 2100000, 2300000, 3100000,
					3300000, 3900000, 4100000, 4700000, 5300000
				],
				time: [
					180, 600, 1800, 21600, 39600, 57600, 75600, 86400, 129600, 172800, 216000, 302400, 388800, 475200, 475200, 518400,
					518400, 561600, 561600
				],
				resource: 'Builder Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 33,
			name: 'Beta Minion',
			housingSpace: 3,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 3,
				cost: 25000,
				time: 1800,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 4
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [60, 60, 65, 65, 72, 72, 81, 81, 90, 90, 99, 99, 108, 108, 117, 117, 126, 126],
			upgrade: {
				cost: [
					50000, 110000, 220000, 330000, 360000, 900000, 1100000, 1300000, 1500000, 2300000, 2500000, 3300000, 3500000, 4000000,
					4200000, 4800000, 5400000
				],
				time: [
					14400, 28800, 43200, 64800, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400,
					561600, 561600
				],
				resource: 'Builder Elixir'
			},
			minLevel: 3,
			seasonal: false,
			levels: [0, 0, 6, 8, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 34,
			name: 'Boxer Giant',
			housingSpace: 18,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 3,
				cost: 10000,
				time: 600,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 3
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [65, 65, 70, 70, 76, 76, 83, 83, 91, 91, 100, 100, 109, 109, 119, 119, 129, 129],
			upgrade: {
				cost: [
					60000, 120000, 240000, 350000, 380000, 1000000, 1200000, 1300000, 1500000, 2300000, 2500000, 3300000, 3500000, 4000000,
					4200000, 4800000, 5400000
				],
				time: [
					18000, 36000, 57600, 72000, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400,
					561600, 561600
				],
				resource: 'Builder Elixir'
			},
			minLevel: 3,
			seasonal: false,
			levels: [0, 0, 6, 8, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 35,
			name: 'Bomber',
			housingSpace: 12,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 4,
				cost: 100000,
				time: 10800,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 5
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [80, 80, 90, 90, 100, 100, 110, 110, 120, 120, 130, 130, 140, 140, 150, 150],
			upgrade: {
				cost: [
					320000, 340000, 360000, 900000, 1000000, 1200000, 1400000, 2200000, 2400000, 3200000, 3400000, 3900000, 4100000,
					4700000, 5300000
				],
				time: [57600, 72000, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 5,
			seasonal: false,
			levels: [0, 0, 0, 8, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 36,
			name: 'Power P.E.K.K.A',
			housingSpace: 22,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1500000,
				time: 259200,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 10
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [420, 420, 460, 460, 500, 500, 560, 560],
			upgrade: {
				cost: [3600000, 3800000, 4000000, 4600000, 4800000, 5600000, 5800000],
				time: [388800, 475200, 475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 13,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 16, 18, 20]
		},
		{
			id: 37,
			name: 'Cannon Cart',
			housingSpace: 16,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 300000,
				time: 32400,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 7
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [115, 115, 130, 130, 150, 150, 170, 170, 190, 190, 215, 215, 240, 240],
			upgrade: {
				cost: [1000000, 1100000, 1200000, 1400000, 1600000, 2400000, 2600000, 3400000, 3600000, 4100000, 4300000, 5300000, 5700000],
				time: [86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 7,
			seasonal: false,
			levels: [0, 0, 0, 0, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 38,
			name: 'Drop Ship',
			housingSpace: 15,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 1000000,
				time: 172800,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 9
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
			upgrade: {
				cost: [2400000, 2600000, 2800000, 3600000, 3800000, 4300000, 4500000, 5500000, 5700000],
				time: [216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 11,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 14, 16, 18, 20]
		},
		{
			id: 41,
			name: 'Baby Dragon',
			housingSpace: 12,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 4,
				cost: 150000,
				time: 21600,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 6
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [62, 62, 68, 68, 75, 75, 83, 83, 91, 91, 100, 100, 110, 110, 120, 120],
			upgrade: {
				cost: [
					360000, 380000, 400000, 1000000, 1200000, 1400000, 1600000, 2400000, 2600000, 3400000, 3600000, 4100000, 4300000,
					5100000, 5500000
				],
				time: [57600, 72000, 86400, 129600, 172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 5,
			seasonal: false,
			levels: [0, 0, 0, 8, 10, 12, 14, 16, 18, 20]
		},
		{
			id: 42,
			name: 'Night Witch',
			housingSpace: 14,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 6,
				cost: 500000,
				time: 86400,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 8
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [176, 176, 193, 193, 216, 216, 234, 234, 257, 257, 278, 278],
			upgrade: {
				cost: [1400000, 1600000, 1800000, 2500000, 2700000, 3500000, 3700000, 4200000, 4400000, 5200000, 5600000],
				time: [172800, 172800, 216000, 302400, 388800, 475200, 475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 9,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 12, 14, 16, 18, 20]
		},
		{
			id: 45,
			name: 'Battle Ram',
			housingSpace: 4,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 2500,
				time: 600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 3
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [6000],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		},
		{
			id: 47,
			name: 'Royal Ghost',
			housingSpace: 8,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 270000,
				time: 64800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			trainingTime: 37,
			regenerationTimes: [],
			dps: [200, 280, 360, 440, 520, 600, 680],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 0, 0, 0, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7]
		},
		{
			id: 48,
			name: 'Pumpkin Barbarian',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 1,
				cost: 100,
				time: 10,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 1
			},
			trainingTime: 5,
			regenerationTimes: [],
			dps: [8, 11, 14, 18, 23, 26, 30],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7]
		},
		{
			id: 50,
			name: 'Giant Skeleton',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 2500,
				time: 600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 3
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [22, 28, 38, 48, 62, 86, 100, 114, 128, 142, 156],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11]
		},
		{
			id: 51,
			name: 'Wall Wrecker',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 12,
				cost: 3500000,
				time: 367200,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 1
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [250, 300, 350, 400],
			upgrade: {
				cost: [4200000, 5600000, 10500000],
				time: [475200, 604800, 1036800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4]
		},
		{
			id: 52,
			name: 'Battle Blimp',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 12,
				cost: 5500000,
				time: 475200,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 2
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [100, 140, 180, 220],
			upgrade: {
				cost: [4200000, 5600000, 10500000],
				time: [475200, 604800, 1036800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4]
		},
		{
			id: 53,
			name: 'Yeti',
			housingSpace: 18,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 12,
				cost: 9000000,
				time: 864000,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 14
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [230, 250, 270, 290],
			upgrade: {
				cost: [7700000, 11200000, 17100000],
				time: [648000, 1036800, 1468800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4]
		},
		{
			id: 55,
			name: 'Sneaky Goblin',
			housingSpace: 3,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 2,
				cost: 5000,
				time: 3600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 4
			},
			trainingTime: 21,
			regenerationTimes: [],
			dps: [155, 170],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 7,
			seasonal: false,
			levels: [0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
		},
		{
			id: 56,
			name: 'Super Miner',
			housingSpace: 24,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 3700000,
				time: 475200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 12
			},
			trainingTime: 120,
			regenerationTimes: [],
			dps: [170, 185, 200],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 7,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9]
		},
		{
			id: 57,
			name: 'Rocket Balloon',
			housingSpace: 8,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 4,
				cost: 120000,
				time: 43200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 6
			},
			trainingTime: 48,
			regenerationTimes: [],
			dps: [236, 256, 276],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 8,
			seasonal: false,
			levels: [0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
		},
		{
			id: 58,
			name: 'Ice Golem',
			housingSpace: 15,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 11,
				cost: 7500000,
				time: 691200,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 8
			},
			trainingTime: 150,
			regenerationTimes: [],
			dps: [24, 28, 32, 36, 40, 44],
			upgrade: {
				cost: [55000, 85000, 110000, 140000, 305000],
				time: [244800, 432000, 626400, 820800, 1382400],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 6, 6]
		},
		{
			id: 59,
			name: 'Electro Dragon',
			housingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 11,
				cost: 6500000,
				time: 648000,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 13
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [240, 270, 300, 330, 360, 390],
			upgrade: {
				cost: [6300000, 7700000, 12000000, 18000000, 20000000],
				time: [475200, 842400, 1036800, 1468800, 1555200],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6]
		},
		{
			id: 61,
			name: 'Skeleton Barrel',
			housingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 4,
				cost: 120000,
				time: 43200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 6
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [75, 96, 144, 216, 324, 486, 594, 708, 768],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 0, 0, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 9]
		},
		{
			id: 62,
			name: 'Stone Slammer',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 12,
				cost: 7500000,
				time: 604800,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 3
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [400, 500, 600, 700],
			upgrade: {
				cost: [4200000, 5600000, 10500000],
				time: [475200, 604800, 1036800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4]
		},
		{
			id: 63,
			name: 'Inferno Dragon',
			housingSpace: 15,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2600000,
				time: 345600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 11
			},
			trainingTime: 135,
			regenerationTimes: [],
			dps: [75, 79, 83],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 6,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8]
		},
		{
			id: 64,
			name: 'Super Valkyrie',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1000000,
				time: 129600,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 3
			},
			trainingTime: 225,
			regenerationTimes: [],
			dps: [250, 300, 325],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Dark Elixir'
			},
			minLevel: 7,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9]
		},
		{
			id: 65,
			name: 'Dragon Rider',
			housingSpace: 25,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 13,
				cost: 12500000,
				time: 1123200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 15
			},
			trainingTime: 250,
			regenerationTimes: [],
			dps: [340, 370, 400],
			upgrade: {
				cost: [12000000, 16500000],
				time: [972000, 1382400],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3]
		},
		{
			id: 66,
			name: 'Super Witch',
			housingSpace: 40,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2200000,
				time: 302400,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 5
			},
			trainingTime: 400,
			regenerationTimes: [],
			dps: [360, 390],
			upgrade: {
				cost: [75000],
				time: [518400],
				resource: 'Dark Elixir'
			},
			minLevel: 5,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6]
		},
		{
			id: 67,
			name: 'El Primo',
			housingSpace: 10,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 270000,
				time: 64800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			trainingTime: 60,
			regenerationTimes: [],
			dps: [120],
			upgrade: {
				cost: [120000],
				time: [734400],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		},
		{
			id: 70,
			name: 'Hog Glider',
			housingSpace: 12,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2000000,
				time: 345600,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 11
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [900, 1100, 1100, 1100, 1100, 1300],
			upgrade: {
				cost: [4000000, 4200000, 4400000, 5400000, 5800000],
				time: [475200, 518400, 518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 15,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 18, 20]
		},
		{
			id: 72,
			name: 'Party Wizard',
			housingSpace: 4,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 270000,
				time: 64800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			trainingTime: 30,
			regenerationTimes: [],
			dps: [75, 105, 135, 188, 255, 278, 300, 322, 345, 367],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]
		},
		{
			id: 75,
			name: 'Siege Barracks',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 13,
				cost: 11000000,
				time: 907200,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 4
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [5600000, 7700000, 10500000],
				time: [604800, 842400, 1036800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4]
		},
		{
			id: 76,
			name: 'Ice Hound',
			housingSpace: 40,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2900000,
				time: 388800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 6
			},
			trainingTime: 400,
			regenerationTimes: [],
			dps: [10, 15],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Dark Elixir'
			},
			minLevel: 5,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 6, 6, 6, 6]
		},
		{
			id: 80,
			name: 'Super Bowler',
			housingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 4000000,
				time: 561600,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 7
			},
			trainingTime: 300,
			regenerationTimes: [],
			dps: [170, 185, 200],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Dark Elixir'
			},
			minLevel: 4,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6]
		},
		{
			id: 81,
			name: 'Super Dragon',
			housingSpace: 40,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 1200000,
				time: 129600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 9
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [80, 85, 90],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 7,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9]
		},
		{
			id: 82,
			name: 'Headhunter',
			housingSpace: 6,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 12,
				cost: 10000000,
				time: 907200,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 9
			},
			trainingTime: 60,
			regenerationTimes: [],
			dps: [105, 115, 125],
			upgrade: {
				cost: [125000, 180000],
				time: [842400, 1036800],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3]
		},
		{
			id: 83,
			name: 'Super Wizard',
			housingSpace: 10,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 270000,
				time: 64800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			trainingTime: 75,
			regenerationTimes: [],
			dps: [220, 240, 260],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 9,
			seasonal: false,
			levels: [0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 84,
			name: 'Super Minion',
			housingSpace: 12,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 200000,
				time: 28800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 1
			},
			trainingTime: 108,
			regenerationTimes: [],
			dps: [300, 325, 350, 360],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Dark Elixir'
			},
			minLevel: 8,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 87,
			name: 'Log Launcher',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 13,
				cost: 12000000,
				time: 1036800,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 5
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [140, 160, 180, 200],
			upgrade: {
				cost: [6000000, 8200000, 10500000],
				time: [648000, 907200, 1036800],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4]
		},
		{
			id: 91,
			name: 'Flame Flinger',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 14,
				cost: 16500000,
				time: 1468800,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 6
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [45, 50, 55, 60],
			upgrade: {
				cost: [7600000, 10500000, 13300000],
				time: [820800, 1166400, 1296000],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
		},
		{
			id: 92,
			name: 'Battle Drill',
			housingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 15,
				cost: 19000000,
				time: 1555200,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 7
			},
			trainingTime: 1200,
			regenerationTimes: [],
			dps: [430, 470, 510, 550],
			upgrade: {
				cost: [8000000, 11000000, 14000000],
				time: [864000, 1209600, 1382400],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4]
		},
		{
			id: 94,
			name: 'Ram Rider',
			housingSpace: 12,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 1200000,
				time: 129600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 9
			},
			trainingTime: 60,
			regenerationTimes: [],
			dps: [100, 125, 150, 175, 200, 225, 250, 275, 300],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: true,
			levels: [0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9]
		},
		{
			id: 95,
			name: 'Electro Titan',
			housingSpace: 32,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 14,
				cost: 15000000,
				time: 1382400,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 16
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [180, 200, 220],
			upgrade: {
				cost: [19500000, 20500000],
				time: [1512000, 1555200],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3]
		},
		{
			id: 106,
			name: 'Electrofire Wizard',
			housingSpace: 14,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 3000000,
				time: 432000,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 12
			},
			trainingTime: '',
			regenerationTimes: [],
			dps: [220, 220, 253, 253],
			upgrade: {
				cost: [4400000, 5400000, 5800000],
				time: [518400, 561600, 561600],
				resource: 'Builder Elixir'
			},
			minLevel: 17,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 20]
		},
		{
			id: 0,
			name: 'Lightning Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 5,
				cost: 150000,
				time: 28800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 1
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [50000, 100000, 200000, 600000, 1500000, 2500000, 4200000, 7000000, 16000000],
				time: [14400, 28800, 43200, 86400, 345600, 518400, 626400, 777600, 1382400],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9, 10]
		},
		{
			id: 1,
			name: 'Healing Spell',
			housingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 6,
				cost: 300000,
				time: 86400,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 2
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [75000, 150000, 300000, 900000, 1800000, 3000000, 10500000, 17000000],
				time: [18000, 36000, 72000, 129600, 345600, 518400, 1036800, 1468800],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9]
		},
		{
			id: 2,
			name: 'Rage Spell',
			housingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 7,
				cost: 600000,
				time: 172800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 3
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [400000, 800000, 1600000, 2400000, 7700000],
				time: [43200, 86400, 172800, 345600, 691200],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 6, 6, 6, 6]
		},
		{
			id: 3,
			name: 'Jump Spell',
			housingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 9,
				cost: 1200000,
				time: 302400,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 4
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [2000000, 3400000, 9000000, 16500000],
				time: [345600, 518400, 972000, 1425600],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 4, 4, 5]
		},
		{
			id: 5,
			name: 'Freeze Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 9,
				cost: 1200000,
				time: 302400,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 4
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [1200000, 1700000, 3000000, 4200000, 6000000, 7700000],
				time: [129600, 223200, 367200, 518400, 669600, 712800],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 6, 7, 7, 7, 7]
		},
		{
			id: 4,
			name: "Santa's Surprise",
			housingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 5,
				cost: 150000,
				time: 28800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 1
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: true,
			levels: [0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
		},
		{
			id: 9,
			name: 'Poison Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 8,
				cost: 150000,
				time: 21600,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 1
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [12000, 25000, 43000, 70000, 123000, 195000, 285000, 320000],
				time: [28800, 86400, 223200, 540000, 669600, 1015200, 1447200, 1512000],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9]
		},
		{
			id: 10,
			name: 'Earthquake Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 8,
				cost: 300000,
				time: 64800,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 2
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [15000, 30000, 51000, 84000],
				time: [64800, 129600, 367200, 669600],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 5, 5]
		},
		{
			id: 11,
			name: 'Haste Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 9,
				cost: 600000,
				time: 172800,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 3
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [20000, 34000, 60000, 77000],
				time: [129600, 223200, 432000, 669600],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 5, 5, 5, 5]
		},
		{
			id: 16,
			name: 'Clone Spell',
			housingSpace: 3,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 10,
				cost: 2000000,
				time: 367200,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 5
			},
			trainingTime: 540,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [2100000, 3400000, 4200000, 5600000, 9000000, 15500000],
				time: [151200, 302400, 345600, 604800, 972000, 1360800],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 6, 7, 7]
		},
		{
			id: 17,
			name: 'Skeleton Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 9,
				cost: 1200000,
				time: 345600,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 4
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [22000, 34000, 50000, 87000, 105000, 187000, 345000],
				time: [115200, 223200, 367200, 518400, 626400, 972000, 1598400],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 6, 7, 7, 7]
		},
		{
			id: 22,
			name: 'Birthday Boom',
			housingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 5,
				cost: 150000,
				time: 28800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 1
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [],
				time: [],
				resource: 'Elixir'
			},
			seasonal: true,
			levels: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		},
		{
			id: 28,
			name: 'Bat Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 10,
				cost: 2500000,
				time: 518400,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 5
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [26000, 51000, 70000, 105000, 330000],
				time: [151200, 302400, 453600, 540000, 1555200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 5, 5, 6]
		},
		{
			id: 35,
			name: 'Invisibility Spell',
			housingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 11,
				cost: 3500000,
				time: 432000,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 6
			},
			trainingTime: 180,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [5600000, 8400000, 11300000],
				time: [475200, 691200, 1015200],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4, 4]
		},
		{
			id: 53,
			name: 'Recall Spell',
			housingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 13,
				cost: 9000000,
				time: 777600,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 7
			},
			trainingTime: 360,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [7500000, 14000000, 17500000],
				time: [993600, 1339200, 1512000],
				resource: 'Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4]
		},
		{
			id: 0,
			name: 'Barbarian King',
			housingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 7,
				cost: 5000,
				time: 0,
				resource: 'Dark Elixir',
				building: 'Barbarian King',
				buildingLevel: 1
			},
			resourceType: 'Elixir',
			trainingTime: 0,
			regenerationTimes: [
				600, 600, 600, 600, 720, 720, 720, 720, 720, 840, 840, 840, 840, 840, 960, 960, 960, 960, 960, 1080, 1080, 1080, 1080, 1080,
				1200, 1200, 1200, 1200, 1200, 1320, 1320, 1320, 1320, 1320, 1440, 1440, 1440, 1440, 1440, 1560, 1560, 1560, 1560, 1560,
				1680, 1680, 1680, 1680, 1680, 1800, 1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040,
				2160, 2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640
			],
			dps: [
				120, 122, 124, 127, 129, 132, 135, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 168, 171, 174, 178, 181, 185, 189, 193,
				196, 200, 204, 208, 213, 217, 221, 226, 230, 235, 239, 244, 249, 254, 259, 275, 281, 287, 293, 299, 305, 312, 318, 325, 332,
				339, 346, 353, 361, 369, 377, 385, 393, 401, 410, 418, 426, 435, 444, 453, 462, 471, 480, 490, 500, 510, 520, 530, 540, 550,
				559, 568, 577, 586, 595, 603, 611, 619, 627, 635
			],
			upgrade: {
				cost: [
					6000, 7000, 8000, 10000, 11000, 12000, 13000, 14000, 15000, 17000, 19000, 21000, 23000, 25000, 27000, 29000, 31000,
					33000, 35000, 37000, 39000, 41000, 43000, 45000, 47000, 49000, 51000, 53000, 55000, 57000, 59000, 60000, 62000, 64000,
					66000, 68000, 70000, 73000, 76000, 80000, 85000, 89000, 94000, 98000, 103000, 109000, 114000, 119000, 125000, 130000,
					135000, 140000, 146000, 151000, 158000, 165000, 172000, 180000, 187000, 193000, 200000, 206000, 211000, 216000, 225000,
					234000, 243000, 252000, 261000, 267000, 270000, 279000, 284000, 289000, 300000, 305000, 310000, 315000, 320000, 330000,
					335000, 340000, 345000, 350000
				],
				time: [
					14400, 21600, 28800, 36000, 43200, 50400, 57600, 64800, 72000, 79200, 86400, 115200, 144000, 172800, 172800, 172800,
					172800, 172800, 216000, 216000, 216000, 216000, 216000, 259200, 259200, 259200, 259200, 259200, 345600, 345600, 345600,
					345600, 345600, 410400, 410400, 410400, 410400, 410400, 475200, 475200, 475200, 475200, 475200, 496800, 496800, 496800,
					496800, 496800, 496800, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000,
					540000, 540000, 540000, 583200, 583200, 583200, 583200, 626400, 626400, 626400, 626400, 626400, 626400, 691200, 691200,
					691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200
				],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 5, 10, 30, 40, 50, 65, 75, 80, 85]
		},
		{
			id: 1,
			name: 'Archer Queen',
			housingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 9,
				cost: 10000,
				time: 0,
				resource: 'Dark Elixir',
				building: 'Archer Queen',
				buildingLevel: 1
			},
			resourceType: 'Elixir',
			trainingTime: 0,
			regenerationTimes: [
				600, 600, 600, 600, 720, 720, 720, 720, 720, 840, 840, 840, 840, 840, 960, 960, 960, 960, 960, 1080, 1080, 1080, 1080, 1080,
				1200, 1200, 1200, 1200, 1200, 1320, 1320, 1320, 1320, 1320, 1440, 1440, 1440, 1440, 1440, 1560, 1560, 1560, 1560, 1560,
				1680, 1680, 1680, 1680, 1680, 1800, 1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040,
				2160, 2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640
			],
			dps: [
				160, 164, 168, 172, 176, 181, 185, 190, 194, 199, 204, 209, 215, 220, 226, 231, 237, 243, 249, 255, 262, 268, 275, 282, 289,
				296, 304, 311, 319, 327, 335, 344, 352, 361, 370, 379, 389, 398, 408, 419, 429, 440, 451, 462, 474, 486, 498, 510, 523, 536,
				547, 558, 570, 582, 594, 606, 619, 632, 645, 658, 671, 684, 698, 712, 726, 739, 751, 762, 772, 781, 789, 796, 802, 808, 814,
				820, 825, 830, 835, 840, 844, 848, 852, 856, 860
			],
			upgrade: {
				cost: [
					11000, 12000, 13000, 15000, 16000, 17000, 18000, 19000, 20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000,
					38000, 40000, 42000, 44000, 46000, 48000, 50000, 52000, 54000, 56000, 58000, 60000, 63000, 65000, 67000, 69000, 72000,
					74000, 77000, 79000, 82000, 84000, 89000, 93000, 97000, 101000, 106000, 111000, 116000, 122000, 127000, 132000, 138000,
					143000, 148000, 154000, 159000, 166000, 172000, 179000, 186000, 192000, 198000, 203000, 208000, 213000, 219000, 228000,
					237000, 246000, 255000, 266000, 269000, 278000, 283000, 288000, 297000, 302000, 308000, 314000, 319000, 325000, 334000,
					338000, 342000, 346000, 350000
				],
				time: [
					14400, 21600, 28800, 36000, 43200, 50400, 57600, 64800, 72000, 79200, 86400, 115200, 144000, 172800, 172800, 172800,
					172800, 172800, 216000, 216000, 216000, 216000, 216000, 259200, 259200, 259200, 259200, 259200, 345600, 345600, 345600,
					345600, 345600, 410400, 410400, 410400, 410400, 410400, 475200, 475200, 475200, 475200, 475200, 496800, 496800, 496800,
					496800, 496800, 496800, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000,
					540000, 540000, 540000, 583200, 583200, 583200, 583200, 626400, 626400, 626400, 626400, 626400, 626400, 691200, 691200,
					691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200
				],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 30, 40, 50, 65, 75, 80, 85]
		},
		{
			id: 2,
			name: 'Grand Warden',
			housingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 11,
				cost: 1000000,
				time: 0,
				resource: 'Elixir',
				building: 'Grand Warden',
				buildingLevel: 1
			},
			resourceType: 'Elixir',
			trainingTime: 0,
			regenerationTimes: [
				1200, 1200, 1200, 1200, 1320, 1320, 1320, 1320, 1320, 1440, 1440, 1440, 1440, 1440, 1560, 1560, 1560, 1560, 1560, 1680,
				1680, 1680, 1680, 1680, 1800, 1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040, 2160,
				2160, 2160, 2160, 2160, 2280, 2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640
			],
			dps: [
				50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 75, 78, 82, 86, 90, 94, 98, 102, 106, 110, 115, 120, 125, 130, 136, 142, 148, 154,
				161, 168, 175, 182, 190, 198, 206, 215, 224, 233, 243, 253, 260, 266, 271, 275, 279, 283, 287, 291, 295, 299, 303, 307, 311,
				315, 319, 322, 325, 328, 331, 334
			],
			upgrade: {
				cost: [
					1100000, 1400000, 1600000, 1800000, 2000000, 2200000, 2500000, 2700000, 3100000, 3600000, 4000000, 4400000, 4900000,
					5300000, 5700000, 6200000, 6600000, 7100000, 7900000, 8800000, 8900000, 9000000, 9100000, 9200000, 9300000, 9400000,
					9500000, 9600000, 9700000, 9800000, 9900000, 10000000, 10100000, 10200000, 10300000, 10400000, 10500000, 10600000,
					10700000, 10800000, 11200000, 11600000, 12000000, 12400000, 12800000, 13200000, 13600000, 14300000, 15500000, 16600000,
					17100000, 17600000, 18100000, 18600000, 19200000, 19400000, 19600000, 19800000, 20000000
				],
				time: [
					7200, 14400, 28800, 43200, 57600, 79200, 100800, 115200, 158400, 194400, 237600, 324000, 388800, 475200, 540000, 540000,
					540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000,
					540000, 540000, 540000, 540000, 540000, 540000, 540000, 540000, 583200, 583200, 583200, 583200, 583200, 626400, 626400,
					626400, 626400, 626400, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200
				],
				resource: 'Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 40, 50, 55, 60]
		},
		{
			id: 3,
			name: 'Battle Machine',
			housingSpace: 25,
			village: 'builderBase',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 5,
				cost: 900000,
				time: 43200,
				resource: 'Builder Elixir',
				building: 'Battle Machine',
				buildingLevel: 1
			},
			resourceType: 'Builder Elixir',
			trainingTime: 0,
			regenerationTimes: [0],
			dps: [
				125, 127, 130, 132, 135, 137, 140, 142, 145, 147, 150, 154, 157, 160, 164, 167, 170, 174, 177, 180, 186, 192, 198, 204, 210,
				218, 226, 234, 242, 250, 258, 266, 274, 282, 290
			],
			upgrade: {
				cost: [
					1000000, 1100000, 1200000, 1300000, 1500000, 1600000, 1700000, 1800000, 1900000, 2100000, 2200000, 2300000, 2400000,
					2500000, 2600000, 2700000, 2800000, 2900000, 3000000, 3100000, 3200000, 3300000, 3400000, 3500000, 3600000, 3700000,
					3800000, 3900000, 4000000, 4100000, 4200000, 4300000, 4400000, 4500000
				],
				time: [
					43200, 43200, 86400, 86400, 129600, 129600, 172800, 172800, 216000, 216000, 259200, 259200, 302400, 302400, 345600,
					345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400, 604800,
					604800, 604800, 604800, 604800
				],
				resource: 'Builder Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 5, 10, 20, 25, 30, 35]
		},
		{
			id: 4,
			name: 'Royal Champion',
			housingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 13,
				cost: 60000,
				time: 0,
				resource: 'Dark Elixir',
				building: 'Royal Champion',
				buildingLevel: 1
			},
			resourceType: 'Elixir',
			trainingTime: 0,
			regenerationTimes: [
				1800, 1800, 1800, 1800, 1920, 1920, 1920, 1920, 1920, 2040, 2040, 2040, 2040, 2040, 2160, 2160, 2160, 2160, 2160, 2280,
				2280, 2280, 2280, 2280, 2400, 2400, 2400, 2400, 2400, 2520, 2520, 2520, 2520, 2520, 2640
			],
			dps: [
				374, 383, 392, 401, 410, 418, 426, 434, 442, 450, 458, 466, 474, 482, 490, 498, 506, 514, 522, 530, 535, 540, 545, 550, 555,
				560, 565, 570, 575, 580, 584, 588, 592, 596, 600
			],
			upgrade: {
				cost: [
					73000, 89000, 105000, 122000, 140000, 158000, 170000, 182000, 192000, 202000, 211000, 216000, 222000, 228000, 234000,
					239000, 245000, 251000, 257000, 262000, 267000, 272000, 277000, 282000, 295000, 300000, 305000, 310000, 315000, 325000,
					330000, 335000, 340000, 345000
				],
				time: [
					28800, 57600, 79200, 158400, 237600, 280800, 324000, 367200, 388800, 432000, 475200, 518400, 561600, 561600, 583200,
					583200, 583200, 583200, 583200, 626400, 626400, 626400, 626400, 626400, 691200, 691200, 691200, 691200, 691200, 691200,
					691200, 691200, 691200, 691200
				],
				resource: 'Dark Elixir'
			},
			minLevel: 1,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 30, 35]
		},
		{
			id: 5,
			name: 'Battle Copter',
			housingSpace: 25,
			village: 'builderBase',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 8,
				cost: 2500000,
				time: 0,
				resource: 'Builder Elixir',
				building: 'Battle Copter',
				buildingLevel: 1
			},
			resourceType: 'Builder Elixir',
			trainingTime: 0,
			regenerationTimes: [0],
			dps: [112, 116, 119, 123, 126, 130, 134, 137, 141, 144, 148, 153, 157, 162, 166, 171, 175, 180, 184, 189, 193],
			upgrade: {
				cost: [
					2600000, 2700000, 2800000, 2900000, 3000000, 3100000, 3200000, 3300000, 3400000, 3500000, 3600000, 3700000, 3800000,
					3900000, 4000000, 4100000, 4200000, 4300000, 4400000, 4500000
				],
				time: [
					432000, 432000, 432000, 432000, 432000, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400,
					604800, 604800, 604800, 604800, 604800
				],
				resource: 'Builder Elixir'
			},
			minLevel: 15,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 25, 30, 35]
		},
		{
			id: 0,
			name: 'L.A.S.S.I',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 14000000,
				time: 1058400,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 1
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [150, 160, 170, 180, 190, 200, 210, 220, 230, 240],
			upgrade: {
				cost: [115000, 130000, 145000, 160000, 175000, 190000, 205000, 220000, 235000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
		},
		{
			id: 1,
			name: 'Mighty Yak',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 17500000,
				time: 1382400,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 3
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
			upgrade: {
				cost: [165000, 185000, 205000, 225000, 245000, 255000, 265000, 275000, 285000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
		},
		{
			id: 2,
			name: 'Electro Owl',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 16500000,
				time: 1231200,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 2
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
			upgrade: {
				cost: [135000, 150000, 165000, 180000, 195000, 210000, 225000, 240000, 255000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
		},
		{
			id: 3,
			name: 'Unicorn',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 18500000,
				time: 1555200,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 4
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [],
			upgrade: {
				cost: [210000, 220000, 230000, 240000, 250000, 260000, 270000, 280000, 290000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
		},
		{
			id: 4,
			name: 'Phoenix',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 15,
				cost: 20500000,
				time: 1706400,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 8
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [178, 186, 194, 202, 210, 218, 226, 234, 242, 250],
			upgrade: {
				cost: [230000, 240000, 250000, 260000, 270000, 280000, 290000, 300000, 310000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		},
		{
			id: 7,
			name: 'Poison Lizard',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 15,
				cost: 20250000,
				time: 1684800,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 7
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [181, 192, 203, 214, 225, 236, 247, 258, 269, 280],
			upgrade: {
				cost: [225000, 235000, 245000, 255000, 265000, 275000, 285000, 295000, 305000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		},
		{
			id: 8,
			name: 'Diggy',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 15,
				cost: 20000000,
				time: 1663200,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 6
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [105, 110, 115, 120, 125, 130, 135, 140, 145, 150],
			upgrade: {
				cost: [220000, 230000, 240000, 250000, 260000, 270000, 280000, 290000, 300000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		},
		{
			id: 9,
			name: 'Frosty',
			housingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 15,
				cost: 19750000,
				time: 1641600,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 5
			},
			resourceType: 'Dark Elixir',
			trainingTime: 0,
			regenerationTimes: [],
			dps: [94, 98, 102, 106, 110, 114, 118, 122, 126, 130],
			upgrade: {
				cost: [215000, 225000, 235000, 245000, 255000, 265000, 275000, 285000, 295000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			minLevel: null,
			seasonal: false,
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		}
	],
	TROOPS_HOUSING: [
		{
			hall: 1,
			troops: 20,
			spells: 0
		},
		{
			hall: 2,
			troops: 30,
			spells: 0
		},
		{
			hall: 3,
			troops: 70,
			spells: 0
		},
		{
			hall: 4,
			troops: 80,
			spells: 0
		},
		{
			hall: 5,
			troops: 135,
			spells: 2
		},
		{
			hall: 6,
			troops: 150,
			spells: 4
		},
		{
			hall: 7,
			troops: 200,
			spells: 6
		},
		{
			hall: 8,
			troops: 200,
			spells: 7
		},
		{
			hall: 9,
			troops: 220,
			spells: 9
		},
		{
			hall: 10,
			troops: 240,
			spells: 11
		},
		{
			hall: 11,
			troops: 260,
			spells: 11
		},
		{
			hall: 12,
			troops: 280,
			spells: 11
		},
		{
			hall: 13,
			troops: 300,
			spells: 11
		},
		{
			hall: 14,
			troops: 300,
			spells: 11
		},
		{
			hall: 15,
			troops: 320,
			spells: 11
		}
	]
};
