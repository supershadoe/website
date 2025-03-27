import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    astro.configs.recommended,
    astro.configs['flat/jsx-a11y-recommended'],
    prettier,
    {
        ignores: ['.astro/', 'dist/'],
    },
);
