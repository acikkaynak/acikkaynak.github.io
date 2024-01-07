import { defineMarkdocConfig } from "@astrojs/markdoc/config";
import { config as markdocConfig } from "./src/lib/mdoc/mdoc.config";

export default defineMarkdocConfig(markdocConfig);
