const GRID_COLS = 58;

const GRID_ROWS = 172;

const COL_WIDTHS = [8.7265625, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 10.0, 13.08984375, 17.08984375, 8.7265625, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.90625, 8.36328125, 9.81640625, 15.1796875, 8.7265625, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.90625, 8.7265625, 8.43, 12.36328125, 8.7265625, 8.43, 8.43, 8.43, 8.43, 8.43];

const ROW_HEIGHTS = [14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 46.0, 14.5, 14.5, 14.5, 14.5, 14.5, 15.0, 14.5, 15.0, 14.5, 14.5, 14.5, 15.0, 14.5, 15.0, 15.0, 15.0, 15.0, 14.5, 15.0, 14.5, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 15.0, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 14.5, 15.0, 14.5, 14.5, 15.0, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 15.0, 14.5, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 15.0, 26.0, 26.0, 26.0, 26.5, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 14.5, 15.0, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 15.0, 14.5, 14.5, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 15.0, 15.0, 14.5, 15.0, 15.0, 15.0, 15.0, 15.0, 15.0, 25.75, 26.4, 26.4, 25.75, 25.75, 25.75, 25.75, 25.75, 25.75, 25.75, 25.75, 25.75, 25.75, 26.4, 15.0, 14.5, 15.0, 14.5, 15.0, 15.0, 15.0, 15.0, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5, 14.5];

const STREETS = [
  {
    "name": "aziz",
    "row_start": 12,
    "row_end": 173,
    "col_start": 4,
    "col_end": 9
  },
  {
    "name": "thirty six",
    "row_start": 13,
    "row_end": 173,
    "col_start": 54,
    "col_end": 59
  },
  {
    "name": "salman",
    "row_start": 160,
    "row_end": 173,
    "col_start": 9,
    "col_end": 54
  }
];

const BLOCKS = [
  {
    "id": "C01",
    "sqm": 9951.0,
    "group": "salman",
    "color": "unallocated",
    "row_start": 151,
    "row_end": 155,
    "col_start": 9,
    "col_end": 18
  },
  {
    "id": "C02-L",
    "sqm": 4575.0,
    "group": "salman",
    "color": "unallocated",
    "row_start": 151,
    "row_end": 156,
    "col_start": 19,
    "col_end": 22
  },
  {
    "id": "C02-R",
    "sqm": 7938.0,
    "group": "salman",
    "color": "unallocated",
    "row_start": 151,
    "row_end": 157,
    "col_start": 22,
    "col_end": 31
  },
  {
    "id": "C03-L",
    "sqm": 10938.0,
    "group": "salman",
    "color": "unallocated",
    "row_start": 151,
    "row_end": 157,
    "col_start": 32,
    "col_end": 42
  },
  {
    "id": "C03-R",
    "sqm": 11550.0,
    "group": "salman",
    "color": "unallocated",
    "row_start": 151,
    "row_end": 158,
    "col_start": 42,
    "col_end": 50
  },
  {
    "id": "C04-D",
    "sqm": 4764.0,
    "group": "aziz",
    "color": "unallocated",
    "row_start": 136,
    "row_end": 150,
    "col_start": 9,
    "col_end": 11
  },
  {
    "id": "C04-U",
    "sqm": 11400.0,
    "group": "aziz",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 136,
    "col_start": 9,
    "col_end": 11
  },
  {
    "id": "C05",
    "sqm": 3599.0,
    "group": "aziz",
    "color": "unallocated",
    "row_start": 104,
    "row_end": 111,
    "col_start": 9,
    "col_end": 11
  },
  {
    "id": "C06",
    "sqm": 3315.46,
    "group": "aziz",
    "color": "unallocated",
    "row_start": 94,
    "row_end": 103,
    "col_start": 9,
    "col_end": 10
  },
  {
    "id": "C07-D",
    "sqm": 3360.0,
    "group": "salman",
    "color": "unallocated",
    "row_start": 153,
    "row_end": 158,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C07-U",
    "sqm": 7620.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 136,
    "row_end": 153,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C08",
    "sqm": 10320.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 135,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C09",
    "sqm": 3355.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 104,
    "row_end": 111,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C10",
    "sqm": 7800.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 83,
    "row_end": 103,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C11",
    "sqm": 3300.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 74,
    "row_end": 82,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C12",
    "sqm": 10440.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 38,
    "row_end": 73,
    "col_start": 51,
    "col_end": 54
  },
  {
    "id": "C13",
    "sqm": 3258.0,
    "group": "thirty six",
    "color": "unallocated",
    "row_start": 23,
    "row_end": 37,
    "col_start": 51,
    "col_end": 52
  },
  {
    "id": "C14-L",
    "sqm": 8280.36,
    "group": "houses",
    "color": "unallocated",
    "row_start": 17,
    "row_end": 20,
    "col_start": 33,
    "col_end": 49
  },
  {
    "id": "C14-R",
    "sqm": 4791.42,
    "group": "houses",
    "color": "unallocated",
    "row_start": 14,
    "row_end": 17,
    "col_start": 34,
    "col_end": 48
  },
  {
    "id": "R01",
    "sqm": 8262.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 139,
    "row_end": 150,
    "col_start": 12,
    "col_end": 20
  },
  {
    "id": "R02",
    "sqm": 9639.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 139,
    "row_end": 150,
    "col_start": 21,
    "col_end": 34
  },
  {
    "id": "R03",
    "sqm": 4650.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 134,
    "row_end": 150,
    "col_start": 38,
    "col_end": 40
  },
  {
    "id": "R04",
    "sqm": 10706.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 139,
    "row_end": 150,
    "col_start": 41,
    "col_end": 50
  },
  {
    "id": "R05",
    "sqm": 6700.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 132,
    "row_end": 138,
    "col_start": 12,
    "col_end": 18
  },
  {
    "id": "R06",
    "sqm": 7600.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 118,
    "row_end": 138,
    "col_start": 19,
    "col_end": 22
  },
  {
    "id": "R07",
    "sqm": 5488.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 123,
    "row_end": 138,
    "col_start": 23,
    "col_end": 25
  },
  {
    "id": "R08",
    "sqm": 8607.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 119,
    "row_end": 138,
    "col_start": 26,
    "col_end": 31
  },
  {
    "id": "R09",
    "sqm": 8607.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 119,
    "row_end": 138,
    "col_start": 32,
    "col_end": 37
  },
  {
    "id": "R10",
    "sqm": 5550.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 119,
    "row_end": 133,
    "col_start": 38,
    "col_end": 40
  },
  {
    "id": "R11",
    "sqm": 13332.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 129,
    "row_end": 138,
    "col_start": 41,
    "col_end": 50
  },
  {
    "id": "R12",
    "sqm": 13938.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 119,
    "row_end": 128,
    "col_start": 41,
    "col_end": 50
  },
  {
    "id": "R13",
    "sqm": 8058.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 117,
    "col_start": 15,
    "col_end": 22
  },
  {
    "id": "R14",
    "sqm": 4557.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 122,
    "col_start": 23,
    "col_end": 25
  },
  {
    "id": "R15",
    "sqm": 11752.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 118,
    "col_start": 26,
    "col_end": 42
  },
  {
    "id": "R16",
    "sqm": 6760.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 118,
    "col_start": 43,
    "col_end": 47
  },
  {
    "id": "R17",
    "sqm": 8174.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 104,
    "row_end": 111,
    "col_start": 11,
    "col_end": 18
  },
  {
    "id": "R18",
    "sqm": 11773.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 104,
    "row_end": 111,
    "col_start": 19,
    "col_end": 30
  },
  {
    "id": "R19",
    "sqm": 12566.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 104,
    "row_end": 111,
    "col_start": 31,
    "col_end": 44
  },
  {
    "id": "R20",
    "sqm": 9211.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 104,
    "row_end": 111,
    "col_start": 45,
    "col_end": 51
  },
  {
    "id": "R21",
    "sqm": 12760.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 94,
    "row_end": 103,
    "col_start": 12,
    "col_end": 23
  },
  {
    "id": "R22",
    "sqm": 7280.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 83,
    "row_end": 103,
    "col_start": 24,
    "col_end": 27
  },
  {
    "id": "R23",
    "sqm": 7280.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 83,
    "row_end": 103,
    "col_start": 35,
    "col_end": 38
  },
  {
    "id": "R24",
    "sqm": 12760.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 94,
    "row_end": 103,
    "col_start": 39,
    "col_end": 50
  },
  {
    "id": "R25",
    "sqm": 12760.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 83,
    "row_end": 93,
    "col_start": 39,
    "col_end": 50
  },
  {
    "id": "R26",
    "sqm": 2938.15,
    "group": "houses",
    "color": "unallocated",
    "row_start": 74,
    "row_end": 78,
    "col_start": 14,
    "col_end": 18
  },
  {
    "id": "R27",
    "sqm": 11580.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 74,
    "row_end": 82,
    "col_start": 19,
    "col_end": 30
  },
  {
    "id": "R28",
    "sqm": 12420.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 74,
    "row_end": 82,
    "col_start": 31,
    "col_end": 42
  },
  {
    "id": "R29",
    "sqm": 9000.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 74,
    "row_end": 82,
    "col_start": 43,
    "col_end": 51
  },
  {
    "id": "R30",
    "sqm": 3476.1,
    "group": "houses",
    "color": "unallocated",
    "row_start": 69,
    "row_end": 73,
    "col_start": 14,
    "col_end": 22
  },
  {
    "id": "R31",
    "sqm": 4700.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 54,
    "row_end": 73,
    "col_start": 23,
    "col_end": 26
  },
  {
    "id": "R32",
    "sqm": 11526.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 65,
    "row_end": 73,
    "col_start": 27,
    "col_end": 40
  },
  {
    "id": "R33",
    "sqm": 6630.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 65,
    "row_end": 73,
    "col_start": 41,
    "col_end": 47
  },
  {
    "id": "R34",
    "sqm": 540.11,
    "group": "houses",
    "color": "unallocated",
    "row_start": 56,
    "row_end": 64,
    "col_start": 20,
    "col_end": 21
  },
  {
    "id": "R35",
    "sqm": 2267.03,
    "group": "houses",
    "color": "unallocated",
    "row_start": 37,
    "row_end": 53,
    "col_start": 24,
    "col_end": 26
  },
  {
    "id": "R36",
    "sqm": 8600.37,
    "group": "houses",
    "color": "unallocated",
    "row_start": 32,
    "row_end": 64,
    "col_start": 27,
    "col_end": 30
  },
  {
    "id": "R37",
    "sqm": 8990.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 32,
    "row_end": 64,
    "col_start": 31,
    "col_end": 34
  },
  {
    "id": "R38",
    "sqm": 5600.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 39,
    "row_end": 64,
    "col_start": 35,
    "col_end": 38
  },
  {
    "id": "R39",
    "sqm": 7752.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 32,
    "row_end": 64,
    "col_start": 39,
    "col_end": 42
  },
  {
    "id": "R40",
    "sqm": 7072.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 32,
    "row_end": 42,
    "col_start": 43,
    "col_end": 50
  },
  {
    "id": "R41",
    "sqm": 1638.13,
    "group": "houses",
    "color": "unallocated",
    "row_start": 27,
    "row_end": 31,
    "col_start": 28,
    "col_end": 31
  },
  {
    "id": "R42",
    "sqm": 4650.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 22,
    "row_end": 38,
    "col_start": 35,
    "col_end": 38
  },
  {
    "id": "R43",
    "sqm": 10250.0,
    "group": "houses",
    "color": "unallocated",
    "row_start": 22,
    "row_end": 31,
    "col_start": 39,
    "col_end": 50
  },
  {
    "id": "R44",
    "sqm": 12496.36,
    "group": "houses",
    "color": "unallocated",
    "row_start": 84,
    "row_end": 93,
    "col_start": 12,
    "col_end": 23
  },
  {
    "id": "S01",
    "sqm": 1530.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 139,
    "row_end": 150,
    "col_start": 35,
    "col_end": 37
  },
  {
    "id": "S02",
    "sqm": 11792.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 118,
    "row_end": 131,
    "col_start": 12,
    "col_end": 18
  },
  {
    "id": "S03",
    "sqm": 1560.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 117,
    "col_start": 12,
    "col_end": 14
  },
  {
    "id": "S04",
    "sqm": 4875.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 93,
    "row_end": 102,
    "col_start": 28,
    "col_end": 34
  },
  {
    "id": "S05",
    "sqm": 4875.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 84,
    "row_end": 93,
    "col_start": 28,
    "col_end": 34
  },
  {
    "id": "S06",
    "sqm": 1530.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 65,
    "row_end": 73,
    "col_start": 48,
    "col_end": 50
  },
  {
    "id": "S07",
    "sqm": 11696.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 43,
    "row_end": 64,
    "col_start": 44,
    "col_end": 50
  },
  {
    "id": "S08",
    "sqm": 1500.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 22,
    "row_end": 31,
    "col_start": 32,
    "col_end": 34
  },
  {
    "id": "S09",
    "sqm": 1560.0,
    "group": "services",
    "color": "unallocated",
    "row_start": 112,
    "row_end": 118,
    "col_start": 48,
    "col_end": 50
  }
];
