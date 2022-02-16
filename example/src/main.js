import { createApp } from "vue";
import App from "./App.vue";

import vPlaceholder from "../../dist/library.mjs";

createApp(App).use(vPlaceholder).mount("#app");
