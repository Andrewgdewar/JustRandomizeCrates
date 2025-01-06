import { ITemplateItem } from "@spt/models/eft/common/tables/ITemplateItem";

export const saveToFile = (data, filePath) => {
  var fs = require("fs");
  let dir = __dirname;
  let dirArray = dir.split("\\");
  const directory = `${dirArray[dirArray.length - 5]}/${
    dirArray[dirArray.length - 4]
  }/${dirArray[dirArray.length - 3]}/${dirArray[dirArray.length - 2]}/`;
  console.log(directory);
  fs.writeFile(
    directory + filePath,
    JSON.stringify(data, null, 4),
    function (err) {
      if (err) throw err;
    }
  );
};

export const cloneDeep = (objectToClone: any) =>
  JSON.parse(JSON.stringify(objectToClone));

export const deDupeArr = (arr: any[]) => [...new Set(arr)];

export const checkParentRecursive = (
  parentId: string,
  items: Record<string, ITemplateItem>,
  queryIds: string[]
): boolean => {
  if (queryIds.includes(parentId)) return true;
  if (!items?.[parentId]?._parent) return false;

  return checkParentRecursive(items[parentId]._parent, items, queryIds);
};

export const isObject = (item) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

export const defaultStaticLoot = {
  "5d6fd13186f77424ad2a8c69": {
    itemcountDistribution: [
      {
        count: 5,
        relativeProbability: 561,
      },
      {
        count: 2,
        relativeProbability: 514,
      },
      {
        count: 3,
        relativeProbability: 515,
      },
      {
        count: 6,
        relativeProbability: 501,
      },
      {
        count: 4,
        relativeProbability: 519,
      },
      {
        count: 8,
        relativeProbability: 513,
      },
      {
        count: 7,
        relativeProbability: 535,
      },
    ],
    itemDistribution: [
      {
        tpl: "62a09ee4cf4a99369e262453",
        relativeProbability: 542,
      },
      {
        tpl: "57347d9c245977448b40fa85",
        relativeProbability: 519,
      },
      {
        tpl: "6389c6463485cf0eeb260715",
        relativeProbability: 324,
      },
      {
        tpl: "57505f6224597709a92585a9",
        relativeProbability: 529,
      },
      {
        tpl: "590c5d4b86f774784e1b9c45",
        relativeProbability: 633,
      },
      {
        tpl: "57347da92459774491567cf5",
        relativeProbability: 552,
      },
      {
        tpl: "5448ff904bdc2d6f028b456e",
        relativeProbability: 546,
      },
      {
        tpl: "5af0484c86f7740f02001f7f",
        relativeProbability: 435,
      },
      {
        tpl: "573475fb24597737fb1379e1",
        relativeProbability: 1376,
      },
      {
        tpl: "5c0fa877d174af02a012e1cf",
        relativeProbability: 394,
      },
      {
        tpl: "573476f124597737e04bf328",
        relativeProbability: 853,
      },
      {
        tpl: "5734770f24597738025ee254",
        relativeProbability: 1017,
      },
      {
        tpl: "57347d8724597744596b4e76",
        relativeProbability: 608,
      },
      {
        tpl: "57347d3d245977448f7b7f61",
        relativeProbability: 607,
      },
      {
        tpl: "573476d324597737da2adc13",
        relativeProbability: 1305,
      },
      {
        tpl: "5751487e245977207e26a315",
        relativeProbability: 637,
      },
      {
        tpl: "544fb62a4bdc2dfb738b4568",
        relativeProbability: 722,
      },
      {
        tpl: "59e3577886f774176a362503",
        relativeProbability: 571,
      },
      {
        tpl: "5bc9b156d4351e00367fbce9",
        relativeProbability: 198,
      },
      {
        tpl: "57347d5f245977448b40fa81",
        relativeProbability: 467,
      },
      {
        tpl: "5673de654bdc2d180f8b456d",
        relativeProbability: 368,
      },
      {
        tpl: "57513f07245977207e26a311",
        relativeProbability: 788,
      },
      {
        tpl: "5bc9c29cd4351e003562b8a3",
        relativeProbability: 307,
      },
      {
        tpl: "5734773724597737fd047c14",
        relativeProbability: 247,
      },
      {
        tpl: "57347d7224597744596b4e72",
        relativeProbability: 595,
      },
      {
        tpl: "5448fee04bdc2dbc018b4567",
        relativeProbability: 338,
      },
      {
        tpl: "635a758bfefc88a93f021b8a",
        relativeProbability: 123,
      },
      {
        tpl: "57347d90245977448f7b7f65",
        relativeProbability: 559,
      },
      {
        tpl: "575146b724597720a27126d5",
        relativeProbability: 649,
      },
      {
        tpl: "57347d692459774491567cf1",
        relativeProbability: 575,
      },
      {
        tpl: "60098b1705871270cd5352a1",
        relativeProbability: 222,
      },
      {
        tpl: "5bc9be8fd4351e00334cae6e",
        relativeProbability: 395,
      },
      {
        tpl: "5e54f6af86f7742199090bf3",
        relativeProbability: 308,
      },
    ],
  },
  "5d6fd45b86f774317075ed43": {
    itemcountDistribution: [
      {
        count: 2,
        relativeProbability: 12208,
      },
      {
        count: 4,
        relativeProbability: 12204,
      },
      {
        count: 1,
        relativeProbability: 12176,
      },
      {
        count: 3,
        relativeProbability: 12206,
      },
      {
        count: 5,
        relativeProbability: 12409,
      },
      {
        count: 6,
        relativeProbability: 12424,
      },
      {
        count: 0,
        relativeProbability: 3396,
      },
    ],
    itemDistribution: [
      {
        tpl: "56742c2e4bdc2d95058b456d",
        relativeProbability: 4679,
      },
      {
        tpl: "5d1c774f86f7746d6620f8db",
        relativeProbability: 2603,
      },
      {
        tpl: "5b43575a86f77424f443fe62",
        relativeProbability: 2922,
      },
      {
        tpl: "63a0b208f444d32d6f03ea1e",
        relativeProbability: 2571,
      },
      {
        tpl: "57347c5b245977448d35f6e1",
        relativeProbability: 10128,
      },
      {
        tpl: "56742c284bdc2d98058b456d",
        relativeProbability: 6401,
      },
      {
        tpl: "5c12688486f77426843c7d32",
        relativeProbability: 2194,
      },
      {
        tpl: "590a358486f77429692b2790",
        relativeProbability: 4214,
      },
      {
        tpl: "590a3d9c86f774385926e510",
        relativeProbability: 2637,
      },
      {
        tpl: "590a391c86f774385a33c404",
        relativeProbability: 2592,
      },
      {
        tpl: "5d1b327086f7742525194449",
        relativeProbability: 1332,
      },
      {
        tpl: "590c346786f77423e50ed342",
        relativeProbability: 5235,
      },
      {
        tpl: "590a3cd386f77436f20848cb",
        relativeProbability: 5972,
      },
      {
        tpl: "5d1b32c186f774252167a530",
        relativeProbability: 2154,
      },
      {
        tpl: "590c311186f77424d1667482",
        relativeProbability: 3354,
      },
      {
        tpl: "590c31c586f774245e3141b2",
        relativeProbability: 5581,
      },
      {
        tpl: "5672cb304bdc2dc2088b456a",
        relativeProbability: 4193,
      },
      {
        tpl: "5d1b36a186f7742523398433",
        relativeProbability: 2136,
      },
      {
        tpl: "61bf7b6302b3924be92fa8c3",
        relativeProbability: 8513,
      },
      {
        tpl: "5734795124597738002c6176",
        relativeProbability: 6835,
      },
      {
        tpl: "619cbf476b8a1b37a54eebf8",
        relativeProbability: 3783,
      },
      {
        tpl: "590a3c0a86f774385a33c450",
        relativeProbability: 4363,
      },
      {
        tpl: "59e35ef086f7741777737012",
        relativeProbability: 6854,
      },
      {
        tpl: "5d1b392c86f77425243e98fe",
        relativeProbability: 5513,
      },
      {
        tpl: "619cbfeb6b8a1b37a54eebfa",
        relativeProbability: 883,
      },
      {
        tpl: "60391b0fb847c71012789415",
        relativeProbability: 3397,
      },
      {
        tpl: "57347b8b24597737dd42e192",
        relativeProbability: 6697,
      },
      {
        tpl: "5d1b317c86f7742523398392",
        relativeProbability: 1188,
      },
      {
        tpl: "57347c1124597737fb1379e3",
        relativeProbability: 7308,
      },
      {
        tpl: "57347c77245977448d35f6e2",
        relativeProbability: 10255,
      },
      {
        tpl: "5d0375ff86f774186372f685",
        relativeProbability: 1344,
      },
      {
        tpl: "5672cb124bdc2d1a0f8b4568",
        relativeProbability: 5884,
      },
      {
        tpl: "5d03794386f77420415576f5",
        relativeProbability: 2499,
      },
      {
        tpl: "590c5bbd86f774785762df04",
        relativeProbability: 1628,
      },
      {
        tpl: "62a0a098de7ac8199358053b",
        relativeProbability: 1739,
      },
      {
        tpl: "590c35a486f774273531c822",
        relativeProbability: 3334,
      },
      {
        tpl: "59e36c6f86f774176c10a2a7",
        relativeProbability: 3834,
      },
      {
        tpl: "59fafb5d86f774067a6f2084",
        relativeProbability: 2502,
      },
      {
        tpl: "5e2af2bc86f7746d3f3c33fc",
        relativeProbability: 5984,
      },
      {
        tpl: "5d1b313086f77425227d1678",
        relativeProbability: 5030,
      },
      {
        tpl: "5733279d245977289b77ec24",
        relativeProbability: 3468,
      },
      {
        tpl: "590c2b4386f77425357b6123",
        relativeProbability: 2110,
      },
      {
        tpl: "5c06779c86f77426e00dd782",
        relativeProbability: 6532,
      },
      {
        tpl: "5d40425986f7743185265461",
        relativeProbability: 1312,
      },
      {
        tpl: "5d4042a986f7743185265463",
        relativeProbability: 1217,
      },
      {
        tpl: "60391a8b3364dc22b04d0ce5",
        relativeProbability: 1267,
      },
      {
        tpl: "5d40419286f774318526545f",
        relativeProbability: 1214,
      },
      {
        tpl: "5d1b309586f77425227d1676",
        relativeProbability: 3382,
      },
      {
        tpl: "590c595c86f7747884343ad7",
        relativeProbability: 3557,
      },
      {
        tpl: "590c5c9f86f77477c91c36e7",
        relativeProbability: 2970,
      },
      {
        tpl: "66b37f114410565a8f6789e2",
        relativeProbability: 797,
      },
      {
        tpl: "590a3efd86f77437d351a25b",
        relativeProbability: 2078,
      },
      {
        tpl: "59e35cbb86f7741778269d83",
        relativeProbability: 5146,
      },
      {
        tpl: "590c2c9c86f774245b1f03f2",
        relativeProbability: 2234,
      },
      {
        tpl: "5e2af22086f7746d3f3c33fa",
        relativeProbability: 5514,
      },
      {
        tpl: "5e2aee0a86f774755a234b62",
        relativeProbability: 1757,
      },
      {
        tpl: "590c2d8786f774245b1f03f3",
        relativeProbability: 1753,
      },
      {
        tpl: "5909e99886f7740c983b9984",
        relativeProbability: 5031,
      },
      {
        tpl: "5d1b385e86f774252167b98a",
        relativeProbability: 1253,
      },
      {
        tpl: "62a0a0bb621468534a797ad5",
        relativeProbability: 917,
      },
      {
        tpl: "5e2af37686f774755a234b65",
        relativeProbability: 1235,
      },
      {
        tpl: "5d1b2fa286f77425227d1674",
        relativeProbability: 1694,
      },
      {
        tpl: "57347cd0245977445a2d6ff1",
        relativeProbability: 4688,
      },
      {
        tpl: "5af0561e86f7745f5f3ad6ac",
        relativeProbability: 1738,
      },
      {
        tpl: "5d63d33b86f7746ea9275524",
        relativeProbability: 824,
      },
      {
        tpl: "5d1b371186f774253763a656",
        relativeProbability: 1680,
      },
      {
        tpl: "59e366c186f7741778269d85",
        relativeProbability: 2585,
      },
      {
        tpl: "60391afc25aff57af81f7085",
        relativeProbability: 908,
      },
      {
        tpl: "5af04b6486f774195a3ebb49",
        relativeProbability: 843,
      },
      {
        tpl: "5bc9b355d4351e6d1509862a",
        relativeProbability: 861,
      },
      {
        tpl: "590c2e1186f77425357b6124",
        relativeProbability: 3068,
      },
      {
        tpl: "5d1b31ce86f7742523398394",
        relativeProbability: 1281,
      },
      {
        tpl: "61bf83814088ec1a363d7097",
        relativeProbability: 861,
      },
      {
        tpl: "62a0a16d0b9d3c46de5b6e97",
        relativeProbability: 847,
      },
      {
        tpl: "5e2af29386f7746d4159f077",
        relativeProbability: 1185,
      },
      {
        tpl: "590c639286f774151567fa95",
        relativeProbability: 1242,
      },
      {
        tpl: "590a373286f774287540368b",
        relativeProbability: 3018,
      },
      {
        tpl: "5bc9c377d4351e3bac12251b",
        relativeProbability: 842,
      },
      {
        tpl: "619cbfccbedcde2f5b3f7bdd",
        relativeProbability: 806,
      },
      {
        tpl: "5d1b39a386f774252339976f",
        relativeProbability: 1269,
      },
      {
        tpl: "5e2af47786f7746d404f3aaa",
        relativeProbability: 583,
      },
      {
        tpl: "5e2af4a786f7746d3f3c3400",
        relativeProbability: 511,
      },
      {
        tpl: "5d1b2f3f86f774252167a52c",
        relativeProbability: 228,
      },
      {
        tpl: "5e2af4d286f7746d4159f07a",
        relativeProbability: 555,
      },
      {
        tpl: "5d1b304286f774253763a528",
        relativeProbability: 196,
      },
      {
        tpl: "5e2af41e86f774755a234b67",
        relativeProbability: 373,
      },
      {
        tpl: "5672cb724bdc2dc2088b456b",
        relativeProbability: 263,
      },
      {
        tpl: "59e35de086f7741778269d84",
        relativeProbability: 159,
      },
      {
        tpl: "5e2aedd986f7746d404f3aa4",
        relativeProbability: 155,
      },
      {
        tpl: "5d0378d486f77420421a5ff4",
        relativeProbability: 157,
      },
      {
        tpl: "5d0376a486f7747d8050965c",
        relativeProbability: 186,
      },
    ],
  },
  "5d6fe50986f77449d97f7463": {
    itemcountDistribution: [
      {
        count: 1,
        relativeProbability: 1822,
      },
      {
        count: 2,
        relativeProbability: 1839,
      },
      {
        count: 3,
        relativeProbability: 1673,
      },
      {
        count: 4,
        relativeProbability: 1702,
      },
      {
        count: 5,
        relativeProbability: 1742,
      },
      {
        count: 6,
        relativeProbability: 1729,
      },
      {
        count: 0,
        relativeProbability: 199,
      },
    ],
    itemDistribution: [
      {
        tpl: "57347c93245977448d35f6e3",
        relativeProbability: 1717,
      },
      {
        tpl: "544fb3f34bdc2d03748b456a",
        relativeProbability: 324,
      },
      {
        tpl: "544fb37f4bdc2dee738b4567",
        relativeProbability: 1271,
      },
      {
        tpl: "62a0a043cf4a99369e2624a5",
        relativeProbability: 611,
      },
      {
        tpl: "5755356824597772cb798962",
        relativeProbability: 1068,
      },
      {
        tpl: "59faf98186f774067b6be103",
        relativeProbability: 1416,
      },
      {
        tpl: "590a3efd86f77437d351a25b",
        relativeProbability: 779,
      },
      {
        tpl: "59e35abd86f7741778269d82",
        relativeProbability: 1299,
      },
      {
        tpl: "5c13cef886f774072e618e82",
        relativeProbability: 2849,
      },
      {
        tpl: "5d4041f086f7743cac3f22a7",
        relativeProbability: 616,
      },
      {
        tpl: "544fb3364bdc2d34748b456a",
        relativeProbability: 1833,
      },
      {
        tpl: "619cc01e0a7c3a1a2731940c",
        relativeProbability: 1897,
      },
      {
        tpl: "5af0454c86f7746bf20992e8",
        relativeProbability: 935,
      },
      {
        tpl: "590c695186f7741e566b64a2",
        relativeProbability: 330,
      },
      {
        tpl: "5751a25924597722c463c472",
        relativeProbability: 2132,
      },
      {
        tpl: "5d1b3a5d86f774252167ba22",
        relativeProbability: 2450,
      },
      {
        tpl: "5c10c8fd86f7743d7d706df3",
        relativeProbability: 305,
      },
      {
        tpl: "544fb45d4bdc2dee738b4568",
        relativeProbability: 878,
      },
      {
        tpl: "5d1b3f2d86f774253763b735",
        relativeProbability: 1111,
      },
      {
        tpl: "5c13cd2486f774072c757944",
        relativeProbability: 2876,
      },
      {
        tpl: "544fb25a4bdc2dfb738b4567",
        relativeProbability: 2366,
      },
      {
        tpl: "59e3606886f77417674759a5",
        relativeProbability: 940,
      },
      {
        tpl: "5af0548586f7743a532b7e99",
        relativeProbability: 297,
      },
      {
        tpl: "5c0e530286f7747fa1419862",
        relativeProbability: 311,
      },
      {
        tpl: "59e361e886f774176c10a2a5",
        relativeProbability: 920,
      },
      {
        tpl: "6389c6c7dbfd5e4b95197e68",
        relativeProbability: 440,
      },
      {
        tpl: "5d02778e86f774203e7dedbe",
        relativeProbability: 308,
      },
      {
        tpl: "5b4335ba86f7744d2837a264",
        relativeProbability: 1227,
      },
      {
        tpl: "5e8488fa988a8701445df1e4",
        relativeProbability: 775,
      },
      {
        tpl: "5e831507ea0a7c419c2f9bd9",
        relativeProbability: 760,
      },
      {
        tpl: "5755383e24597772cb798966",
        relativeProbability: 327,
      },
      {
        tpl: "590c661e86f7741e566b646a",
        relativeProbability: 783,
      },
      {
        tpl: "5751a89d24597722aa0e8db0",
        relativeProbability: 88,
      },
      {
        tpl: "5672cb724bdc2dc2088b456b",
        relativeProbability: 90,
      },
      {
        tpl: "5af0534a86f7743b6f354284",
        relativeProbability: 69,
      },
      {
        tpl: "5c0530ee86f774697952d952",
        relativeProbability: 9,
      },
      {
        tpl: "5c052e6986f7746b207bc3c9",
        relativeProbability: 4,
      },
    ],
  },
};
