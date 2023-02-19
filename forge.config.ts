import type {ForgeConfig} from '@electron-forge/shared-types';
import {MakerSquirrel} from '@electron-forge/maker-squirrel';
import {MakerZIP} from '@electron-forge/maker-zip';
import {MakerDeb} from '@electron-forge/maker-deb';
import {MakerRpm} from '@electron-forge/maker-rpm';
import {WebpackPlugin} from '@electron-forge/plugin-webpack';

import {mainConfig} from './webpack.main.config';
import {rendererConfig} from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    icon: "icon/logo",
    appCopyright: "Copyright © 2023 Atif",
    extraResource: ["bin"],
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      name: "AtifUI",
      iconUrl: "icon/logo.ico",
      setupIcon: "icon/logo.ico",
    }),
    new MakerZIP({}, ['darwin']),
    new MakerRpm({}),
    new MakerDeb({
      options: {
        icon: "icon/logo.png"
      }
    }),
  ],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
          {
            html: './src/html/run.html',
            js: './src/ui/app/run.tsx',
            name: 'run_window',
            preload: {
              js: './src/preload.ts'
            }
          },
        ],
      },
    }),
  ],
};

export default config;
