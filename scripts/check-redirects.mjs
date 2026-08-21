import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../static/_redirects", import.meta.url), "utf8");
const output = readFileSync(new URL("../build/_redirects", import.meta.url), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(output === source, "Cloudflare Pages output does not preserve _redirects");
assert(!source.includes("/llm.txt"), "the obsolete singular /llm.txt path must not exist");

for (const path of ["/robots.txt", "/sitemap.xml", "/llms.txt"]) {
  assert(
    source.includes(`${path} https://soyaos.ai${path} 301`),
    `${path} does not redirect to the canonical discovery endpoint`,
  );
}

for (const locale of ["zh", "zh-hant", "en"]) {
  assert(
    source.includes(`/${locale}/* https://soyaos.ai/${locale}/docs/:splat 301`),
    `${locale} legacy documents do not preserve their path`,
  );
}

for (const [sourcePath, target] of [
  ["/zh-Hans", "https://soyaos.ai/zh/docs"],
  ["/zh", "https://soyaos.ai/zh/docs"],
  ["/zh-hant", "https://soyaos.ai/zh-hant/docs"],
  ["/en", "https://soyaos.ai/en/docs"],
  ["/", "https://soyaos.ai/en/docs"],
]) {
  assert(
    source.includes(`${sourcePath} ${target} 301`),
    `${sourcePath} does not redirect directly to a slashless canonical URL`,
  );
  if (sourcePath !== "/") {
    assert(
      source.includes(`${sourcePath}/ ${target} 301`),
      `${sourcePath}/ does not redirect directly to a slashless canonical URL`,
    );
  }
}

console.log("legacy docs redirect contract verified");
