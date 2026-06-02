import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    pictures: [
      {
        name: "drink_milk3",
        uri: "https://i.imgur.com/TsG2qxp.png",
      },
      {
        name: "drink_milk1",
        uri: "https://i.imgur.com/T1oQZJ5.png",
      },
      {
        name: "drink_milk2",
        uri: "https://i.imgur.com/UHLORDi.png",
      },
      {
        name: "sm_logo",
        uri: "https://i.imgur.com/sOMRR2Q.png",
      },
    ],
  };
}) satisfies LayoutLoad;
