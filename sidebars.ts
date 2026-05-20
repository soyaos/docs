import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: ["quickstart", "architecture", "editions"],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: ["soyapack-v0", "cli-v0"],
    },
  ],
};

export default sidebars;
