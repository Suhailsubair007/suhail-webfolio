// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Untracked reference résumé data some working copies keep at the root. It is
  // not imported by the app — the live content lives in `shared/content/` — so
  // it is not held to the project's code style.
  ignores: ['data.ts'],
}, {
  rules: {
    // Single-component pages and sections are named by their file path.
    'vue/multi-word-component-names': 'off',

    // A Vue 2 constraint. Vue 3 supports fragment roots, and the page
    // components here are deliberately a flat list of <section> elements.
    'vue/no-multiple-template-root': 'off',

    // Fights utility-class templates: forcing one attribute per line turns a
    // readable element into a 12-line block without adding clarity.
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
})
