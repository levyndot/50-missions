import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {fmModule} from "./app/fm.module";

platformBrowserDynamic()
  .bootstrapModule(fmModule)
  .catch((err) => console.error(err));
