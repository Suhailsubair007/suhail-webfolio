// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
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
