/**
 * @reference https://commitlint.js.org/#/
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'ci',
        'wip',
        'upd',
        'feat',
        'fix',
        'refactor',
        'docs',
        'chore',
        'style',
        'revert',
        'perf',
        'test',
        'build',
      ],
    ],
  },
};
