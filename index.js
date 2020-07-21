$(function() {
    $('.container').submit(event => {
        event.preventDefault();
        const containerText = $(event.currentTarget).find('#shopping-list-entry');
        $("ul").append(`<li>
        <span class="shopping-item">${containerText.val()}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
            <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
        </div>
    </li>`);
        containerText.val("");
    });
    //delete item
    $(".shopping-list").on('click', ".shopping-item-delete", function() {
        $(this).closest("li").remove();
    });
    //check item
    $(".shopping-list").on("click", ".shopping-item-toggle", function() {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
});