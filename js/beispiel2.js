(function($){
    var ListView = Backbone.View.extend({
        el: $('body'), // attaches `this.el` to an existing element.

        events: {
          'click button#add': 'addItem'
        },

        initialize: function(){
            _.bindAll(this, 'render', 'addItem'); // fixes loss of context for 'this' within methods
            this.counter = 0; // total number of items added thus far
            this.render(); // not all views are self-rendering. This one is.
        },
        // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
        render: function(){
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<ul></ul>");
        },

        addItem: function(){
            this.counter++;
            $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
        }
    });

    // **listView instance**: Instantiate main app view.
    var listView = new ListView();
})(jQuery);/**
 * Created with IntelliJ IDEA.
 * User: sebastian.schwarz
 * Date: 20.11.12
 * Time: 17:34
 * To change this template use File | Settings | File Templates.
 */
