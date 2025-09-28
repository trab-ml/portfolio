# Portfolio

```bash
npm run dev

# To access on mobile (if the computer and mobile are on the same network)
vite --host
```

## TODO

- [ ] [Schematize the project big-picture](https://excalidraw.com/)
- [ ] [Deploy the website](https://learnvue.co/articles/deploy-vue-to-github-pages)

## Mock
![Portfolio Screenshot](./src/assets/mock.png)

## Alive-Mock
![Portfolio Screenshot](./src/assets/alive-mock.png)

## Tricky issues

| Issue | Description                                                | Solution |
|-------|------------------------------------------------------------|
| Vue: Could not find a declaration file for module 'vue-material-design-icons/EyeOutline.vue'. '/home/trab/IdeaProjects/portfolio/node_modules/vue-material-design-icons/EyeOutline.vue' implicitly has an 'any' type.There are types at '/home/trab/IdeaProjects/portfolio/node_modules/vue-material-design-icons/EyeOutline.d.vue.ts', but this result could not be resolved when respecting package.json &quot;exports&quot;. The 'vue-material-design-icons' library may need to update its package.json or typings. | Occur for each icon of that lib and when lang is set to ts | A. Add a vue-shims.d.ts file <<<declare module "*.vue" { import Vue from "vue"; export default Vue;}>>> B. Add `// @ts-ignore` before each import of an icon |
| Vue: This syntax is not allowed when 'erasableSyntaxOnly' is enabled. | Occur when trying to export a TS enum in this way : export enum Category | set erasableSyntaxOnly to false in tsconfig files (not work for me); not use enum which is proper to ts and doesn't exist in js |

## Resources
  - [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
  - [Aliasing in Vite](https://www.google.com/search?q=aliasing+in+vite&sca_esv=544fa928dd795f48&sxsrf=AE3TifMVX_MydbO4M44Ec_2vteQpk3GKTA%3A1758302499553&ei=I5HNaKHGIaemkdUP1LHDiAw&ved=0ahUKEwjh45Kfq-WPAxUnU6QEHdTYEMEQ4dUDCBA&uact=5&oq=aliasing+in+vite&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGFsaWFzaW5nIGluIHZpdGUyCBAhGKABGMMESLUlUPwHWNIZcAJ4AZABAJgBVKABnASqAQE4uAEDyAEA-AEBmAIKoALyBMICChAAGLADGNYEGEfCAgYQABgHGB7CAggQABgHGAgYHsICBhAAGAgYHsICBRAAGO8FwgIKEAAYBxgIGAoYHsICCBAAGAUYBxgewgIIEAAYCBgKGB7CAggQABiABBjLAcICBBAAGB7CAgkQABiABBgTGA3CAggQABgTGA0YHsICChAAGBMYBRgNGB6YAwCIBgGQBgiSBwIxMKAHjDayBwE4uAfWBMIHBzAuMS43LjLIB0c&sclient=gws-wiz-serp)
  - [Mobile first design](https://www.browserstack.com/guide/how-to-implement-mobile-first-design#:~:text=Mobile%2Dfirst%20design%20or%20Mobile,up%20to%20larger%20screen%20sizes.)
  - [mdi](https://pictogrammers.com/library/mdi/)
  - [vue router](https://router.vuejs.org/guide/)
  - [erasable-syntax-only](https://www.totaltypescript.com/erasable-syntax-only)
  - [TS release note about erasable-syntax-only](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html)
  - [defence of ts enum](https://www.reddit.com/r/typescript/comments/1jobls9/defence_of_typescript_enums/)
