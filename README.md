# Pizza Fast

1. Create new Vite React App `npm create vite@4`.
2. Install npm packages `npm i`.
3. Configure ESlint: `npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev`
4. Add to `/src` `.eslintrc.json` file.
5. Add to that file mentioned above `{
  "extends": "react-app"
}`
6. Add `import eslint from "vite-plugin-eslint";` to `vite.config.js`.
7. Add `eslint()` to plugins.
8. Run using `npm run dev`.
