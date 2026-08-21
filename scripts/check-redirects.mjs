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

console.log("legacy docs redirect contract verified");
