// this file is generated — do not edit it

declare module "svelte/elements" {
  export interface HTMLAttributes<T> {
    "data-sveltekit-keepfocus"?: true | "" | "off" | undefined | null;
    "data-sveltekit-noscroll"?: true | "" | "off" | undefined | null;
    "data-sveltekit-preload-code"?:
      | true
      | ""
      | "eager"
      | "viewport"
      | "hover"
      | "tap"
      | "off"
      | undefined
      | null;
    "data-sveltekit-preload-data"?:
      | true
      | ""
      | "hover"
      | "tap"
      | "off"
      | undefined
      | null;
    "data-sveltekit-reload"?: true | "" | "off" | undefined | null;
    "data-sveltekit-replacestate"?: true | "" | "off" | undefined | null;
  }
}

export {};

declare module "$app/types" {
  type MatcherParam<M> = M extends ((
    param: string,
  ) => param is infer U extends string)
    ? U
    : string;

  export interface AppTypes {
    RouteId(): "/" | "/demo" | "/demo/template1" | "/story" | "/story/[step]";
    RouteParams(): {
      "/story/[step]": { step: string };
    };
    LayoutParams(): {
      "/": { step?: string | undefined };
      "/demo": Record<string, never>;
      "/demo/template1": Record<string, never>;
      "/story": { step?: string | undefined };
      "/story/[step]": { step: string };
    };
    Pathname():
      | "/"
      | "/demo"
      | "/demo/template1"
      | "/story"
      | (`/story/${string}` & {});
    ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes["Pathname"]>}`;
    Asset():
      | "/img/drink-milk-1.png"
      | "/img/drink_milk1.png"
      | "/img/drink_milk2.png"
      | "/img/drink_milk3.png"
      | "/img/og-logo.png"
      | "/img/og-milk.png"
      | "/img/og-village.png"
      | "/img/sm-logo.png"
      | "/img/sm_logo.png"
      | "/img/village.png"
      | "/robots.txt"
      | (string & {});
  }
}
