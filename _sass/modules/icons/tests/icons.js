casper.test.begin('Visual regression test for the icons module.', function(test) {

  casper.loadPath('modules/icons')

  .loadFixture('icons')

  .then(function () {
    phantomcss.screenshot('.icons', 'icons module');
  })

  .run(function () {
    test.done();
  });

});
