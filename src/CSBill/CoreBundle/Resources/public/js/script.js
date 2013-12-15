$(function(){
    /**
     * Tooltip
     */
    $('body').tooltip({
        "selector" : '[rel=tooltip]'
    });

    /**
     * Chosen
     */
    $('select.chosen').chosen();

    /**
     * PlaceHolder
     */
    $('input[placeholder]').placeholder();

    /**
     * Form Collection
     */
    $(document.body).on('click', '.btn-add', function(event) {

        event.preventDefault();

        var collectionHolder,
            prototype,
            regex,
            form,
            prototype_name;

        collectionHolder = $(this).siblings('.' + $(this).data('target'));

        prototype = collectionHolder.data('prototype');

        if(undefined !== prototype && null !== prototype) {
            if(collectionHolder.data('prototype-name')) {
                prototype_name = collectionHolder.data('prototype-name');
            } else {
                prototype_name = '__name__';
            }

            regex = new RegExp(prototype_name, "g");
            form = prototype.replace(regex, collectionHolder.children().length);

            collectionHolder.append(form);
        }
    });

    $(document.body).on('click', '.btn-remove', function(event) {
        event.preventDefault();
        var name = $(this).attr('data-related'),
            el = $(this).closest('div[data-content^="' + name + '"]');

        el.fadeOut(function() {
            $(this).remove();
        });

        return false;
    });
});