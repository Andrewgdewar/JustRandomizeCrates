/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { enable } from "../config/config.json";
import { setupRoutes } from "./Changer/setupRoutes";

class JustRandomizeCrates implements IPreSptLoadMod {
  preSptLoad(container: DependencyContainer): void {
    if (enable) setupRoutes(container);
  }
}

module.exports = { mod: new JustRandomizeCrates() };
