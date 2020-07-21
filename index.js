$(function() {
    $('.container').submit(event => {
        event.preventDefault();
        const containerText = $(event.currentTarget).find('#shopping-list-entry');
        $(".shopping-item").text(`${containerText.val()}`);
        containerText.val("");
    });
    $("button.submit").click(function(event) {
        $("ul").append('<li>' + $({
                containerText.val())
        })
        $('ul').on('click', 'li', function(event) {
            this.remove();
        });
    });
});