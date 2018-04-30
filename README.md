# Redux Plugin Boilerplate

# Get Started
## 1. Change `package.json` with the correct property values:
- name
- version
- description
- main

## 2. Change `config.js`
Change config.js with the name of your plugin extension.

- libraryName
- libraryClassName

## 3. Change PluginName References to Your Plugin Name
Change PluginName references to your plugin name, for example change **PluginName** to **ImageGallery** in `plugin-name.js`.

- plugin-name/plugin-name.js
- plugin-name/plugin-name.scss
- plugin-name/index.js

## 4. Change File Names
Change `plugin-name.js` and `plugin-name.scss` to the name of your plugin, such as `image-gallery.js` and `image-gallery.scss`.


## 5. Change Plugin Folder Name
Change `src/app/plugin-name` directory to the name of your plugin, such as `src/app/image-gallery`.

## 6. Updated `reducers.js`
Updated `src/reducers.js` with your new plugin reducer name.

## 7. Update `app.component.js`
Update `app.component.js` with your new component name.

## 8. Install Node Modules
```js
npm install
```

## 9. Run Watch or Dev Command
Watch command if you are already running web sever.

```js
npm run watch
```

Dev command if you need a temporary web server to run in the background.

```js
npm run dev
```

# Create Build
```js
npm run build
```

Your new build will be created in the `dist/` directory using the naming convention found in `root/config.js`.