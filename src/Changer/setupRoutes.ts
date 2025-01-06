import { DependencyContainer } from "tsyringe";
import { StaticRouterModService } from "@spt/services/mod/staticRouter/StaticRouterModService";
import { CrateChanger } from "./CrateChanger";

export const setupRoutes = (container: DependencyContainer) => {
  const staticRouterModService = container.resolve<StaticRouterModService>(
    "StaticRouterModService"
  );

  // Make buildwaves run on game end
  staticRouterModService.registerStaticRouter(
    `justRandomizeCratesUpdater`,
    [
      {
        url: "/client/match/group/exit_from_menu",
        action: async (_url, info, sessionId, output) => {
          try {
            CrateChanger(container);
            console.log("RandomizeCrates - Finished");
          } catch (error) {
            console.error("RandomizeCrates - Failed");
          }
          return output;
        },
      },
    ],
    "justRandomizeCratesUpdater"
  );
};
