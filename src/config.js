const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "BeeFrens";
const description = "8,888 BeeFrens work hard to make HUNNY - your off-chain raffle ticket to win big. Built on Bad Bears.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "BEEFRENS",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "0xcb0f8bb73000095E273C82De3040f426B09eE073",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 8888, //Total Image Count to generate
    layersOrder: [  //Layer Image Order
      { name: "background" },
      { name: "overlay" },
      { name: "stinger" },
      { name: "arms" },
      { name: "body" },
      { name: "face" },
      { name: "wing" }
    ],
    firstNames:["Michael","Christopher", "Matthew","Joshua","Daniel","David","Andrew","James","Justin","Joseph","Ryan","John","Robert","Nicholas","Anthony","William","Jonathan","Kyle","Brandon","Jacob","Tyler","Zachary","Kevin","Eric","Steven","Thomas","Brian","Alexander","Jordan","Timothy","Cody","Adam","Benjamin","Aaron","Richard","Patrick","Sean","Charles","Stephen","Jeremy","Jose","Travis","Jeffrey","Nathan","Samuel","Mark","Jason","Jesse","Paul","Dustin","Gregory","Kenneth","Scott","Derek","Austin","Corey","Bryan","Ethan","Alex","Christian","Juan","Cameron","Jared","Taylor","Bradley","Luis","Cory","Edward","Shawn","Ian","Evan","Marcus","Shane","Peter","Carlos","Trevor","Antonio","Vincent","George","Keith","Phillip","Victor","Dylan","Brett","Chad","Nathaniel","Donald","Caleb","Casey","Jesus","Blake","Raymond","Mitchell","Adrian","Joel","Erik","Ronald","Devin","Garrett","Jessica","Ashley","Emily","Samantha","Sarah","Taylor","Brittany","Amanda","Elizabeth","Megan","Nicole","Kayla","Rachel","Lauren","Stephanie","Hannah","Jennifer","Alexis","Victoria","Danielle","Amber","Courtney","Jasmine","Rebecca","Morgan","Alyssa","Brianna","Alexandra","Kelsey","Katherine","Melissa","Kimberly","Michelle","Allison","Tiffany","Haley","Mary","Chelsea","Christina","Shelby","Anna","Abigail","Sara","Heather","Erin","Laura","Maria","Kaitlyn","Andrea","Olivia","Madison","Jordan","Marissa","Brooke","Kristen","Natalie","Erica","Katelyn","Vanessa","Shannon","Miranda","Kelly","Paige","Jacqueline","Crystal","Cassandra","Gabrielle","Briana","Lindsey","Katie","Alexandria","Sierra","Julia","Mariah","Sydney","Emma","Amy","Caitlin","Kathryn","Jenna","Angela","Savannah","Alicia","Breanna","Catherine","Destiny","Jamie","Monica","Brittney","Erika","Whitney","Madeline","Kaitlin","Caroline","Alexa","Molly","Sabrina","Diana","Cheyenne","Meghan"],
    lastNames:["Lindström", "Pellegrini", "Marchuk", "Petrovich", "SMITH","JOHNSON","WILLIAMS","BROWN","JONES","MILLER","DAVIS","GARCIA","RODRIGUEZ","WILSON","MARTINEZ","ANDERSON","TAYLOR","THOMAS","HERNANDEZ","MOORE","MARTIN","JACKSON","THOMPSON","WHITE","LOPEZ","LEE","GONZALEZ","HARRIS","CLARK","LEWIS","ROBINSON","WALKER","PEREZ","HALL","YOUNG","ALLEN","SANCHEZ","WRIGHT","KING","SCOTT","GREEN","BAKER","ADAMS","NELSON","HILL","RAMIREZ","CAMPBELL","MITCHELL","ROBERTS","CARTER","PHILLIPS","EVANS","TURNER","TORRES","PARKER","COLLINS","EDWARDS","STEWART","FLORES","MORRIS","NGUYEN","MURPHY","RIVERA","COOK","ROGERS","MORGAN","PETERSON","COOPER","REED","BAILEY","BELL","GOMEZ","KELLY","HOWARD","WARD","COX","DIAZ","RICHARDSON","WOOD","WATSON","BROOKS","BENNETT","GRAY","JAMES","REYES","CRUZ","HUGHES","PRICE","MYERS","LONG","FOSTER","SANDERS","ROSS","MORALES","POWELL","SULLIVAN","RUSSELL","ORTIZ","JENKINS","GUTIERREZ","PERRY","BUTLER","BARNES"],
    constraints: [
      {"background":["cloudy sunrise", "cloudy sunset", "paint", "pixel beach", "space", "spooky spiral", "explosion", "stage", "comedy stage"], "overlay":["spots neon", "spots cool", "spots fun", "confetti bright", "confetti candy", "confetti fun", "echo black", "echo blue", "echo fun", "echo rainbow", "echo red", "groove bright", "groove candy", "groove cool", "jaggy blue", "jaggy neon", "jaggy orange", "loops black", "loops bright", "loops cool", "loops groovy", "loops red", "rays blue", "rays night", "rays purple", "rays teal", "scratch blue", "scratch orange", "scratch purple", "scratch teal", "scratch yellow", "spiral black", "sprinkles cool", "sprinkles sunny", "squiggles", "star fun", "star wild", "triangles bright", "triangles cool", "triangles dark", "wavy hot", "wavy warm", "zig zag blue", "zig zag orange", "zig zag purple", "zig zag teal", "zig zag yellow"]},
      {"face":["pinocchio", "party"], "arms":["okay"]}
    ]
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1200, //Output Image Width
  height: 1200, //Output Image Height
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
