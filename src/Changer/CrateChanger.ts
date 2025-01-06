import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import config from "../../config/config.json";
import { ILocation } from "@spt/models/eft/common/ILocation";
import { defaultStaticLoot } from "../Utils/utils";

export const CrateChanger = (container: DependencyContainer) => {
  const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
  const tables = databaseServer.getTables();

  enum crateMapper {
    "Ration supply crate" = "5d6fd13186f77424ad2a8c69",
    "Technical supply crate" = "5d6fd45b86f774317075ed43",
    "Medical supply crate" = "5d6fe50986f77449d97f7463",
  }

  enum reverseMapper {
    "5d6fd13186f77424ad2a8c69" = "Ration supply crate",
    "5d6fd45b86f774317075ed43" = "Technical supply crate",
    "5d6fe50986f77449d97f7463" = "Medical supply crate",
  }

  type CrateWeighting = {
    "Ration supply crate": number;
    "Technical supply crate": number;
    "Medical supply crate": number;
  };

  const temp = {};

  for (const mapKey in tables.locations) {
    const map = tables.locations[mapKey] as ILocation;
    const all = [];
    if (!config.crateWeightings?.[mapKey]) continue;

    Object.keys(reverseMapper).forEach((key) => {
      if (!map.staticLoot[key]) {
        tables.locations[mapKey].staticLoot[key] = defaultStaticLoot[key];
      }
    });

    const mapWeightings: CrateWeighting = config.crateWeightings?.[mapKey];
    const itemKeys = Object.keys(mapWeightings);

    for (const key of itemKeys) {
      for (let i = 0; i < mapWeightings[key]; i++) {
        all.push(key);
      }
    }

    const getRandomCrateType = () => {
      const chosen: keyof typeof mapWeightings =
        all[Math.round(Math.random() * (all.length - 1))];

      return crateMapper[chosen];
    };

    if (map?.staticContainers?.staticContainers?.length) {
      for (const key in map.staticContainers.staticContainers) {
        const container = map.staticContainers.staticContainers[key];

        if (reverseMapper[container?.template?.Items?.[0]?._tpl]) {
          if (config.debug) {
            if (!temp[mapKey]) {
              temp[mapKey] = {
                "Ration supply crate": 0,
                "Technical supply crate": 0,
                "Medical supply crate": 0,
              };
            }
          }
          tables.locations[mapKey].staticContainers.staticContainers[
            key
          ].template.Items[0]._tpl = getRandomCrateType();

          if (config.debug) {
            temp[mapKey][
              reverseMapper[container?.template?.Items?.[0]?._tpl]
            ] += 1;
          }
        }
      }
    }
  }

  if (config.debug) {
    console.log(temp);
  }
};
