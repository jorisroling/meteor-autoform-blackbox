Package.describe({
  name: 'jorisroling:autoform-blackbox',
  version: '1.0.4',
  summary: 'A simple autoform blackbox with preview using jorisroling:eyes',
  git: 'https://github.com/jorisroling/meteor-autoform-blackbox',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['templating'], 'client');
  api.use(['jorisroling:eyes@0.0.15', 'aldeed:autoform@5.4.1'], 'client');
  api.addFiles([
    'blackbox.html',
    'blackbox.css',
    'blackbox.js'
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jorisroling:autoform-blackbox');
});
