module.exports = {
  'env': {
    'browser': true
  },
  'extends': ['eslint:recommended'],
  'rules': {
    'no-console': 0,
    'no-fallthrough': 0,
    'no-redeclare': 0,
    'no-unused-vars': 0,
    'no-undef': ['warn'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'no-tabs': 1,
    'quotes': ['warn', 'single']
  }
};
