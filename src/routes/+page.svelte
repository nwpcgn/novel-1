<script lang="ts">
  import {
    Avatar,
    Progress,
    SegmentedControl,
    Slider,
    Switch,
  } from "@skeletonlabs/skeleton-svelte";

  const headerClasses = "space-y-2 pb-2 border-b-2 border-surface-800-200";
  const previewCardClasses =
    "card bg-noise bg-surface-50-950 border-[1px] border-surface-200-800 flex justify-center items-center p-8";

  let color = $state("#bada55");
</script>

<section class="page center nwp">
  <div  class="opacity-50">
    <img src="/img/sm-logo.png" alt="img" />
  </div>
</section>

<section class="nwp page center">
  <div class="p-4 text-center">
    <div>
      <a href="#/story" class="btn btn-dark btn-lg">Landing</a>
    </div>
  </div>
</section>
