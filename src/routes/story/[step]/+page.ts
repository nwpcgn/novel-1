import type { PageLoad } from "./$types";

export const load = (async ({ params }) => {
  return {
    step: params.step,
  };
}) satisfies PageLoad;
