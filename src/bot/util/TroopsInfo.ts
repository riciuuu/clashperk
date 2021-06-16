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
			HousingSpace: 5
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
			HousingSpace: 3
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
			HousingSpace: 10
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
			HousingSpace: 8
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
			HousingSpace: 12
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
			HousingSpace: 40
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
			HousingSpace: 15
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
			HousingSpace: 20
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
			HousingSpace: 12
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
			HousingSpace: 10
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
			HousingSpace: 40
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
			HousingSpace: 8
		}
	],
	TROOPS: [
		{
			id: 0,
			name: 'Barbarian',
			HousingSpace: 1,
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
			upgrade: {
				cost: [25000, 100000, 300000, 1000000, 2000000, 3000000, 5000000, 9500000, 15000000],
				time: [21600, 43200, 86400, 129600, 216000, 345600, 604800, 1036800, 1209600],
				resource: 'Elixir'
			},
			levels: [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10]
		},
		{
			id: 1,
			name: 'Archer',
			HousingSpace: 1,
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
			upgrade: {
				cost: [40000, 160000, 480000, 1300000, 2500000, 3500000, 5500000, 10000000, 15500000],
				time: [43200, 86400, 129600, 172800, 216000, 345600, 604800, 1036800, 1209600],
				resource: 'Elixir'
			},
			levels: [0, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 9, 10]
		},
		{
			id: 2,
			name: 'Goblin',
			HousingSpace: 1,
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
			upgrade: {
				cost: [50000, 200000, 600000, 1200000, 2500000, 4000000, 9500000],
				time: [43200, 86400, 129600, 172800, 302400, 518400, 1036800],
				resource: 'Elixir'
			},
			levels: [0, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 8]
		},
		{
			id: 3,
			name: 'Giant',
			HousingSpace: 5,
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
			upgrade: {
				cost: [50000, 200000, 600000, 1500000, 2500000, 4000000, 6000000, 10500000, 15000000],
				time: [32400, 64800, 129600, 216000, 345600, 432000, 777600, 1209600, 1296000],
				resource: 'Elixir'
			},
			levels: [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]
		},
		{
			id: 4,
			name: 'Wall Breaker',
			HousingSpace: 2,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 3,
				cost: 10000,
				time: 14400,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 5
			},
			upgrade: {
				cost: [100000, 250000, 750000, 1500000, 3500000, 7500000, 11500000, 14000000, 16000000],
				time: [43200, 86400, 129600, 172800, 345600, 604800, 950400, 1296000, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
		},
		{
			id: 5,
			name: 'Balloon',
			HousingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 4,
				cost: 80000,
				time: 28800,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 6
			},
			upgrade: {
				cost: [150000, 450000, 900000, 1800000, 3500000, 7500000, 12000000, 14000000, 18000000],
				time: [43200, 86400, 172800, 259200, 345600, 691200, 1209600, 1382400, 1555200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]
		},
		{
			id: 6,
			name: 'Wizard',
			HousingSpace: 4,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 240000,
				time: 43200,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 7
			},
			upgrade: {
				cost: [150000, 350000, 650000, 1300000, 2600000, 5000000, 8000000, 10000000, 15000000],
				time: [43200, 86400, 129600, 172800, 345600, 518400, 777600, 1123200, 1296000],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]
		},
		{
			id: 7,
			name: 'Healer',
			HousingSpace: 14,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 6,
				cost: 700000,
				time: 57600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 8
			},
			upgrade: {
				cost: [500000, 1000000, 3000000, 9500000, 14500000, 17000000],
				time: [129600, 216000, 345600, 1022400, 1296000, 1468800],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 5, 5, 6, 7]
		},
		{
			id: 8,
			name: 'Dragon',
			HousingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 1000000,
				time: 86400,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 9
			},
			upgrade: {
				cost: [1750000, 2500000, 4000000, 6000000, 8000000, 10000000, 15000000, 18500000],
				time: [129600, 259200, 432000, 604800, 777600, 1209600, 1382400, 1555200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9]
		},
		{
			id: 9,
			name: 'P.E.K.K.A',
			HousingSpace: 25,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1500000,
				time: 129600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 10
			},
			upgrade: {
				cost: [1500000, 2250000, 3200000, 4500000, 6000000, 9000000, 12000000, 15500000],
				time: [172800, 302400, 388800, 518400, 604800, 864000, 1209600, 1296000],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 3, 4, 6, 7, 8, 9, 9]
		},
		{
			id: 10,
			name: 'Minion',
			HousingSpace: 2,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 300000,
				time: 14400,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 1
			},
			upgrade: {
				cost: [3000, 7000, 15000, 25000, 40000, 90000, 150000, 250000, 300000],
				time: [86400, 129600, 172800, 259200, 388800, 604800, 1209600, 1339200, 1425600],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9, 10]
		},
		{
			id: 11,
			name: 'Hog Rider',
			HousingSpace: 5,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 600000,
				time: 43200,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 2
			},
			upgrade: {
				cost: [5000, 9000, 16000, 30000, 50000, 100000, 150000, 240000, 280000],
				time: [108000, 172800, 216000, 345600, 432000, 648000, 993600, 1209600, 1382400],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 9, 10, 10]
		},
		{
			id: 12,
			name: 'Valkyrie',
			HousingSpace: 8,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 900000,
				time: 64800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 3
			},
			upgrade: {
				cost: [8000, 12000, 25000, 45000, 90000, 175000, 260000, 310000],
				time: [194400, 259200, 345600, 518400, 734400, 1123200, 1382400, 1468800],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8, 9]
		},
		{
			id: 13,
			name: 'Golem',
			HousingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1300000,
				time: 86400,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 4
			},
			upgrade: {
				cost: [10000, 20000, 30000, 50000, 75000, 110000, 160000, 200000, 270000, 320000],
				time: [216000, 259200, 345600, 432000, 604800, 691200, 907200, 1209600, 1382400, 1468800],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 7, 9, 10, 10]
		},
		{
			id: 15,
			name: 'Witch',
			HousingSpace: 12,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2000000,
				time: 172800,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 5
			},
			upgrade: {
				cost: [50000, 80000, 130000, 200000],
				time: [432000, 561600, 820800, 1209600],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5]
		},
		{
			id: 17,
			name: 'Lava Hound',
			HousingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2500000,
				time: 259200,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 6
			},
			upgrade: {
				cost: [35000, 60000, 120000, 190000, 270000],
				time: [216000, 432000, 777600, 1209600, 1382400],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 6]
		},
		{
			id: 22,
			name: 'Bowler',
			HousingSpace: 6,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 3000000,
				time: 432000,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 7
			},
			upgrade: {
				cost: [75000, 125000, 200000, 280000],
				time: [518400, 777600, 1209600, 1382400],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5]
		},
		{
			id: 23,
			name: 'Baby Dragon',
			HousingSpace: 10,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2000000,
				time: 216000,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 11
			},
			upgrade: {
				cost: [2500000, 3500000, 4500000, 7000000, 9000000, 15000000, 17000000],
				time: [259200, 432000, 604800, 777600, 1036800, 1339200, 1425600],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8]
		},
		{
			id: 24,
			name: 'Miner',
			HousingSpace: 6,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 10,
				cost: 3000000,
				time: 345600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 12
			},
			upgrade: {
				cost: [3500000, 4500000, 6000000, 8000000, 10500000, 14000000],
				time: [259200, 432000, 648000, 907200, 1209600, 1339200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 6, 7, 7]
		},
		{
			id: 31,
			name: 'Raged Barbarian',
			HousingSpace: 2,
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
			upgrade: {
				cost: [3500, 6000, 9000, 50000, 100000, 300000, 330000, 700000, 900000, 1000000, 1200000, 2000000, 2200000, 3000000, 3200000, 3800000, 4000000],
				time: [0, 300, 900, 10800, 21600, 43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [2, 4, 6, 8, 10, 12, 14, 16, 18]
		},
		{
			id: 32,
			name: 'Sneaky Archer',
			HousingSpace: 2,
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
			upgrade: {
				cost: [5000, 8000, 12000, 60000, 120000, 320000, 350000, 800000, 1000000, 1100000, 1300000, 2100000, 2300000, 3100000, 3300000, 3900000, 4100000],
				time: [180, 600, 1800, 14400, 21600, 43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 4, 6, 8, 10, 12, 14, 16, 18]
		},
		{
			id: 33,
			name: 'Beta Minion',
			HousingSpace: 2,
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
			upgrade: {
				cost: [50000, 80000, 120000, 250000, 280000, 320000, 360000, 900000, 1100000, 1300000, 1500000, 2300000, 2500000, 3300000, 3500000, 4000000, 4200000],
				time: [3600, 10800, 18000, 28800, 43200, 43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 4, 8, 10, 12, 14, 16, 18]
		},
		{
			id: 34,
			name: 'Boxer Giant',
			HousingSpace: 8,
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
			upgrade: {
				cost: [20000, 40000, 60000, 300000, 320000, 340000, 380000, 1000000, 1200000, 1300000, 1500000, 2300000, 2500000, 3300000, 3500000, 4000000, 4200000],
				time: [1800, 3600, 7200, 28800, 43200, 43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 4, 8, 10, 12, 14, 16, 18]
		},
		{
			id: 35,
			name: 'Bomber',
			HousingSpace: 4,
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
			upgrade: {
				cost: [150000, 200000, 250000, 280000, 320000, 340000, 360000, 900000, 1000000, 1200000, 1400000, 2200000, 2400000, 3200000, 3400000, 3900000, 4100000],
				time: [10800, 18000, 28800, 43200, 43200, 43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 8, 10, 12, 14, 16, 18]
		},
		{
			id: 36,
			name: 'Super P.E.K.K.A',
			HousingSpace: 25,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 8,
				cost: 1500000,
				time: 86400,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 10
			},
			upgrade: {
				cost: [1600000, 1700000, 1800000, 1900000, 2000000, 2200000, 2400000, 2600000, 2800000, 3000000, 3200000, 3400000, 3600000, 3800000, 4000000, 4600000, 4800000],
				time: [86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 345600, 345600, 345600, 345600, 345600, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 16, 18]
		},
		{
			id: 37,
			name: 'Cannon Cart',
			HousingSpace: 8,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 5,
				cost: 300000,
				time: 28800,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 7
			},
			upgrade: {
				cost: [400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1400000, 1600000, 2400000, 2600000, 3400000, 3600000, 4100000, 4300000],
				time: [43200, 43200, 86400, 86400, 86400, 86400, 86400, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 0, 10, 12, 14, 16, 18]
		},
		{
			id: 38,
			name: 'Drop Ship',
			HousingSpace: 5,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 7,
				cost: 1000000,
				time: 43200,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 9
			},
			upgrade: {
				cost: [1100000, 1200000, 1300000, 1400000, 1500000, 1600000, 1700000, 1800000, 2000000, 2200000, 2400000, 2600000, 2800000, 3600000, 3800000, 4300000, 4500000],
				time: [43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 259200, 259200, 259200, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 14, 16, 18]
		},
		{
			id: 41,
			name: 'Baby Dragon',
			HousingSpace: 10,
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
			upgrade: {
				cost: [200000, 240000, 280000, 320000, 360000, 380000, 400000, 1000000, 1200000, 1400000, 1600000, 2400000, 2600000, 3400000, 3600000, 4100000, 4300000],
				time: [18000, 28800, 43200, 43200, 43200, 43200, 43200, 86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 8, 10, 12, 14, 16, 18]
		},
		{
			id: 42,
			name: 'Night Witch',
			HousingSpace: 12,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 6,
				cost: 500000,
				time: 36000,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 8
			},
			upgrade: {
				cost: [600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1600000, 1800000, 2500000, 2700000, 3500000, 3700000, 4200000, 4400000],
				time: [43200, 43200, 86400, 86400, 172800, 172800, 172800, 172800, 172800, 172800, 172800, 259200, 259200, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 0, 0, 12, 14, 16, 18]
		},
		{
			id: 51,
			name: 'Wall Wrecker',
			HousingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 12,
				cost: 7500000,
				time: 518400,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 1
			},
			upgrade: {
				cost: [6000000, 8000000, 14000000],
				time: [691200, 864000, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4]
		},
		{
			id: 52,
			name: 'Battle Blimp',
			HousingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 12,
				cost: 9000000,
				time: 691200,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 2
			},
			upgrade: {
				cost: [6000000, 8000000, 14000000],
				time: [691200, 864000, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4]
		},
		{
			id: 53,
			name: 'Yeti',
			HousingSpace: 18,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 12,
				cost: 5000000,
				time: 777600,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 14
			},
			upgrade: {
				cost: [11000000, 15000000],
				time: [1209600, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3]
		},
		{
			id: 58,
			name: 'Ice Golem',
			HousingSpace: 15,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 11,
				cost: 4000000,
				time: 777600,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 8
			},
			upgrade: {
				cost: [80000, 120000, 160000, 200000, 320000],
				time: [432000, 691200, 907200, 1209600, 1468800],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 6]
		},
		{
			id: 59,
			name: 'Electro Dragon',
			HousingSpace: 30,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 11,
				cost: 4000000,
				time: 518400,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 13
			},
			upgrade: {
				cost: [9000000, 11000000, 16000000, 19000000],
				time: [864000, 1209600, 1382400, 1555200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5]
		},
		{
			id: 62,
			name: 'Stone Slammer',
			HousingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 12,
				cost: 10500000,
				time: 864000,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 3
			},
			upgrade: {
				cost: [6000000, 8000000, 14000000],
				time: [691200, 864000, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4]
		},
		{
			id: 65,
			name: 'Dragon Rider',
			HousingSpace: 25,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 13,
				cost: 6000000,
				time: 950400,
				resource: 'Elixir',
				building: 'Barracks',
				buildingLevel: 15
			},
			upgrade: {
				cost: [16000000, 17500000],
				time: [1296000, 1468800],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3]
		},
		{
			id: 70,
			name: 'Hog Glider',
			HousingSpace: 5,
			village: 'builderBase',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 9,
				cost: 2000000,
				time: 129600,
				resource: 'Builder Elixir',
				building: 'Builder Barracks',
				buildingLevel: 11
			},
			upgrade: {
				cost: [1600000, 1700000, 1800000, 1900000, 2000000, 2200000, 2400000, 2600000, 2800000, 3000000, 3200000, 3400000, 3600000, 3800000, 4000000, 4200000, 4400000],
				time: [86400, 86400, 172800, 172800, 259200, 259200, 345600, 345600, 345600, 345600, 345600, 345600, 345600, 345600, 345600, 432000, 432000],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 18]
		},
		{
			id: 75,
			name: 'Siege Barracks',
			HousingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 13,
				cost: 14500000,
				time: 1209600,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 4
			},
			upgrade: {
				cost: [8000000, 11000000, 14000000],
				time: [864000, 1209600, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
		},
		{
			id: 82,
			name: 'Headhunter',
			HousingSpace: 6,
			village: 'home',
			category: 'troop',
			subCategory: 'troop',
			unlock: {
				hall: 12,
				cost: 7500000,
				time: 1123200,
				resource: 'Elixir',
				building: 'Dark Barracks',
				buildingLevel: 9
			},
			upgrade: {
				cost: [180000, 240000],
				time: [1209600, 1382400],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3]
		},
		{
			id: 87,
			name: 'Log Launcher',
			HousingSpace: 1,
			village: 'home',
			category: 'troop',
			subCategory: 'siege',
			unlock: {
				hall: 13,
				cost: 16000000,
				time: 1382400,
				resource: 'Elixir',
				building: 'Workshop',
				buildingLevel: 5
			},
			upgrade: {
				cost: [8000000, 11000000, 14000000],
				time: [864000, 1209600, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
		},
		{
			id: 0,
			name: 'Lightning Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 5,
				cost: 200000,
				time: 28800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 1
			},
			upgrade: {
				cost: [85000, 225000, 450000, 900000, 2000000, 4000000, 8000000, 10000000],
				time: [43200, 86400, 129600, 259200, 432000, 691200, 907200, 1123200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9]
		},
		{
			id: 1,
			name: 'Healing Spell',
			HousingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 6,
				cost: 400000,
				time: 86400,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 2
			},
			upgrade: {
				cost: [75000, 300000, 600000, 1200000, 2500000, 4500000, 14000000],
				time: [21600, 64800, 129600, 259200, 432000, 777600, 1382400],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 7, 7, 8, 8]
		},
		{
			id: 2,
			name: 'Rage Spell',
			HousingSpace: 2,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 7,
				cost: 800000,
				time: 172800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 3
			},
			upgrade: {
				cost: [450000, 900000, 1800000, 3000000, 11000000],
				time: [64800, 129600, 259200, 432000, 993600],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 6, 6, 6]
		},
		{
			id: 3,
			name: 'Jump Spell',
			HousingSpace: 2,
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
			upgrade: {
				cost: [3000000, 6000000, 13000000],
				time: [345600, 604800, 1296000],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 4, 4]
		},
		{
			id: 5,
			name: 'Freeze Spell',
			HousingSpace: 1,
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
			upgrade: {
				cost: [1500000, 2500000, 4200000, 6000000, 8500000, 11000000],
				time: [172800, 345600, 518400, 648000, 777600, 993600],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 6, 7, 7, 7]
		},
		{
			id: 9,
			name: 'Poison Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 8,
				cost: 250000,
				time: 21600,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 1
			},
			upgrade: {
				cost: [20000, 40000, 75000, 150000, 200000, 260000, 300000],
				time: [86400, 172800, 345600, 777600, 950400, 1339200, 1512000],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 6, 7, 8]
		},
		{
			id: 10,
			name: 'Earthquake Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 8,
				cost: 500000,
				time: 64800,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 2
			},
			upgrade: {
				cost: [20000, 40000, 75000, 120000],
				time: [172800, 345600, 648000, 950400],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 5]
		},
		{
			id: 11,
			name: 'Haste Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 9,
				cost: 1000000,
				time: 172800,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 3
			},
			upgrade: {
				cost: [30000, 50000, 80000, 120000],
				time: [216000, 432000, 691200, 950400],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 5, 5, 5]
		},
		{
			id: 16,
			name: 'Clone Spell',
			HousingSpace: 3,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 10,
				cost: 2400000,
				time: 432000,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 5
			},
			upgrade: {
				cost: [3000000, 4500000, 7000000, 9000000, 14000000, 16500000],
				time: [259200, 388800, 561600, 993600, 1296000, 1425600],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5, 6, 7]
		},
		{
			id: 17,
			name: 'Skeleton Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 9,
				cost: 2000000,
				time: 345600,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 4
			},
			upgrade: {
				cost: [25000, 40000, 70000, 125000, 150000, 250000],
				time: [216000, 345600, 561600, 734400, 907200, 1296000],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 6, 7, 7]
		},
		{
			id: 28,
			name: 'Bat Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 10,
				cost: 3000000,
				time: 518400,
				resource: 'Elixir',
				building: 'Dark Spell Factory',
				buildingLevel: 5
			},
			upgrade: {
				cost: [30000, 60000, 120000, 160000],
				time: [259200, 475200, 648000, 777600],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 5, 5]
		},
		{
			id: 35,
			name: 'Invisibility Spell',
			HousingSpace: 1,
			village: 'home',
			category: 'spell',
			subCategory: 'spell',
			unlock: {
				hall: 11,
				cost: 4800000,
				time: 604800,
				resource: 'Elixir',
				building: 'Spell Factory',
				buildingLevel: 6
			},
			upgrade: {
				cost: [9000000, 12000000, 15000000],
				time: [777600, 993600, 1339200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 4]
		},
		{
			id: 0,
			name: 'Barbarian King',
			HousingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 7,
				cost: 5000,
				time: 0,
				resource: 'Dark Elixir',
				building: 'Town Hall',
				buildingLevel: 1
			},
			upgrade: {
				cost: [6000, 7000, 8000, 10000, 11000, 12000, 13000, 14000, 15000, 17000, 19000, 21000, 23000, 25000, 27000, 29000, 31000, 33000, 35000, 37000, 39000, 41000, 43000, 45000, 48000, 51000, 54000, 57000, 60000, 63000, 66000, 69000, 72000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000, 203000, 206000, 209000, 212000, 215000, 218000, 221000, 224000, 227000, 230000, 233000, 236000, 239000, 240000, 250000, 260000, 270000, 280000, 290000, 292000, 294000, 296000, 298000, 300000, 305000, 310000, 315000, 320000, 325000],
				time: [14400, 21600, 28800, 36000, 43200, 50400, 57600, 64800, 72000, 79200, 86400, 115200, 144000, 172800, 172800, 172800, 172800, 172800, 259200, 259200, 259200, 259200, 259200, 302400, 302400, 302400, 302400, 302400, 345600, 345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400, 561600, 561600, 561600, 561600, 561600, 561600, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 648000, 648000, 648000, 648000, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 5, 10, 30, 40, 50, 65, 75, 80]
		},
		{
			id: 1,
			name: 'Archer Queen',
			HousingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 9,
				cost: 10000,
				time: 0,
				resource: 'Dark Elixir',
				building: 'Town Hall',
				buildingLevel: 1
			},
			upgrade: {
				cost: [11000, 12000, 13000, 15000, 16000, 17000, 18000, 19000, 20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000, 38000, 40000, 42000, 44000, 46000, 48000, 50000, 53000, 56000, 59000, 62000, 65000, 68000, 71000, 74000, 77000, 80000, 85000, 90000, 95000, 100000, 105000, 115000, 120000, 125000, 135000, 145000, 155000, 165000, 175000, 185000, 195000, 200000, 204000, 208000, 212000, 216000, 220000, 224000, 228000, 232000, 236000, 240000, 240000, 240000, 240000, 240000, 250000, 260000, 270000, 280000, 290000, 292000, 294000, 296000, 298000, 300000, 306000, 312000, 318000, 324000, 330000],
				time: [14400, 21600, 28800, 36000, 43200, 50400, 57600, 64800, 72000, 79200, 86400, 115200, 144000, 172800, 172800, 172800, 172800, 172800, 259200, 259200, 259200, 259200, 259200, 302400, 302400, 302400, 302400, 302400, 345600, 345600, 345600, 345600, 345600, 432000, 432000, 432000, 432000, 432000, 518400, 518400, 518400, 518400, 518400, 561600, 561600, 561600, 561600, 561600, 561600, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 648000, 648000, 648000, 648000, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 30, 40, 50, 65, 75, 80]
		},
		{
			id: 2,
			name: 'Grand Warden',
			HousingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 11,
				cost: 2000000,
				time: 0,
				resource: 'Elixir',
				building: 'Town Hall',
				buildingLevel: 1
			},
			upgrade: {
				cost: [2250000, 2500000, 2750000, 3000000, 3300000, 3750000, 4500000, 5250000, 6000000, 7000000, 7500000, 8000000, 8400000, 8800000, 9100000, 9400000, 9600000, 9800000, 10000000, 10000000, 10200000, 10400000, 10600000, 10800000, 11000000, 11200000, 11400000, 11600000, 11800000, 12000000, 12000000, 12000000, 12000000, 12000000, 12000000, 12000000, 12000000, 12000000, 12000000, 12000000, 12500000, 13000000, 13500000, 14000000, 14500000, 15000000, 15500000, 16000000, 16500000, 17000000, 17500000, 18000000, 18500000, 19000000],
				time: [14400, 28800, 43200, 86400, 129600, 172800, 259200, 345600, 388800, 432000, 475200, 518400, 561600, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 604800, 648000, 648000, 648000, 648000, 648000, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
				resource: 'Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 40, 50, 55]
		},
		{
			id: 3,
			name: 'Battle Machine',
			HousingSpace: 25,
			village: 'builderBase',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 5,
				cost: 900000,
				time: 43200,
				resource: 'Builder Elixir',
				building: 'Builder Hall',
				buildingLevel: 1
			},
			upgrade: {
				cost: [1000000, 1100000, 1200000, 1300000, 1500000, 1600000, 1700000, 1800000, 1900000, 2100000, 2200000, 2300000, 2400000, 2500000, 2600000, 2700000, 2800000, 2900000, 3000000, 3100000, 3200000, 3300000, 3400000, 3500000, 3600000, 3700000, 3800000, 3900000, 4000000, 4000000],
				time: [43200, 43200, 86400, 86400, 86400, 86400, 86400, 86400, 86400, 172800, 172800, 172800, 172800, 172800, 259200, 259200, 259200, 259200, 259200, 259200, 259200, 259200, 259200, 259200, 345600, 345600, 345600, 345600, 345600, 345600],
				resource: 'Builder Elixir'
			},
			levels: [0, 0, 0, 0, 5, 10, 20, 25, 30]
		},
		{
			id: 4,
			name: 'Royal Champion',
			HousingSpace: 25,
			village: 'home',
			category: 'hero',
			subCategory: 'hero',
			unlock: {
				hall: 13,
				cost: 120000,
				time: 0,
				resource: 'Dark Elixir',
				building: 'Town Hall',
				buildingLevel: 1
			},
			upgrade: {
				cost: [130000, 140000, 150000, 160000, 170000, 180000, 190000, 200000, 210000, 220000, 230000, 235000, 240000, 245000, 250000, 255000, 260000, 265000, 270000, 275000, 280000, 285000, 290000, 295000, 300000, 305000, 310000, 315000, 320000],
				time: [86400, 129600, 172800, 216000, 259200, 302400, 345600, 388800, 432000, 475200, 518400, 561600, 604800, 604800, 648000, 648000, 648000, 648000, 648000, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 30]
		},
		{
			id: 0,
			name: 'L.A.S.S.I',
			HousingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 15000000,
				time: 1123200,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 1
			},
			upgrade: {
				cost: [115000, 130000, 145000, 160000, 175000, 190000, 205000, 220000, 235000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		},
		{
			id: 1,
			name: 'Mighty Yak',
			HousingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 18500000,
				time: 1468800,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 3
			},
			upgrade: {
				cost: [165000, 185000, 205000, 225000, 245000, 255000, 265000, 275000, 285000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		},
		{
			id: 2,
			name: 'Electro Owl',
			HousingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 17500000,
				time: 1296000,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 2
			},
			upgrade: {
				cost: [135000, 150000, 165000, 180000, 195000, 210000, 225000, 240000, 255000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		},
		{
			id: 3,
			name: 'Unicorn',
			HousingSpace: 20,
			village: 'home',
			category: 'troop',
			subCategory: 'pet',
			unlock: {
				hall: 14,
				cost: 19500000,
				time: 1641600,
				resource: 'Elixir',
				building: 'Pet House',
				buildingLevel: 4
			},
			upgrade: {
				cost: [210000, 220000, 230000, 240000, 250000, 260000, 270000, 280000, 290000],
				time: [259200, 345600, 432000, 475200, 518400, 561600, 604800, 648000, 691200],
				resource: 'Dark Elixir'
			},
			levels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
		}
	]
};
