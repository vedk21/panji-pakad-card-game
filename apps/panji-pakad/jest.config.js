module.exports = {
  name: 'panji-pakad',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/panji-pakad',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
