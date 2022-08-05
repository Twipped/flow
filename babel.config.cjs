module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        useBuiltIns: 'entry',
        corejs: 3,
        exclude: [ 'transform-typeof-symbol' ],
        targets: {
          node: 16,
        },
      },
    ],
    [ '@babel/preset-react', {
      runtime: 'automatic',
    } ],
  ],
};
