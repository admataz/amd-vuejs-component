

var items = [
  'here',
  'is',
  'a list s'
];

require(['./components/TestComponent/TestComponent'], function(TestC){
  TestC.init('#testarea', {
      title: 'Test component',
      items: items
    });
})
