var app = (function($) {

    var $body = $('body'),
        page = $body.data('page'),
        options = {
            elAddToCart: '.js-add-to-cart',
            attrId: 'data-id',
            attrName: 'data-name',
            attrPrice: 'data-price',
            attrDelta: 'data-delta',
            elCart: '#cart',
            elTotalCartCount: '#total-cart-count',
            elTotalCartSumma: '#total-cart-summa',
            elCartItem: '.js-cart-item',
            elCartCount: '.js-count',
            elCartSumma: '.js-summa',
            elChangeCount: '.js-change-count',
            elRemoveFromCart: '.js-remove-from-cart'
        },
        optionsCatalog = _.extend({
            renderCartOnInit: false,
            renderMenuCartOnInit: true
        }, options),
        optionsCart = _.extend({
            renderCartOnInit: true,
            renderMenuCartOnInit: true
        }, options);

    function init() {
        catalog.init();
        // cart.init(optionsCatalog);
        cart.init(optionsCart);
    }
    
    return {
        init: init
    }    

})(jQuery);

jQuery(document).ready(app.init);