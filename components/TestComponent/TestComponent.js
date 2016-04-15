define(['vue', 'jquery', 'text!./template.html', 'css!./style.css'], function(Vue, $, template, style) {



    function init(el, data) {
      return new Vue({
        el: el,
        template: template,
        data: function() {
          return data
        },
        methods: {

        addItem: function(evt){
          this.items.push(this.newitemlabel);
        },
        removeItem: function(itm){
          this.items.splice(itm, 1);
        }
      },
      directives: [{name:'list-values'}]
      })
    }

  Vue.directive('list-values', {
    bind: function(){
      console.log(this.el);
      // init(this.el)
      // ($('li', this.el).each(function(i, itm){
      //   console.log($(itm).text().trim());
      // }));
      console.log(this.vm);
    },
    update: function(oldValue, newValue){
      console.log(oldValue);
      console.log(newValue);
    },
    unbind: function(){
    }
  });


  // new Vue({el: '#testarea'});




  return {
    init: init
  }
});
