  $(function () {

    $.fn.flex = function () {
      var element = $(this);
      var container_width = Math.floor(element[0].getBoundingClientRect().width);
      var item_width = element.find('.cell').width();
      var items_count = Math.floor(container_width / item_width);
      var items_width = item_width * items_count;
      var difference = container_width - items_width;
      var margin = Math.floor(difference / (items_count - 1));

      if (margin < 10) {
        items_count -= 1;
        var items_width = item_width * items_count;
        var difference = container_width - items_width;
        var margin = Math.floor(difference / (items_count - 1));
      }

      element.each(function (index, el) {
        $(el).find('.cell').each(function (index, el) {
          if ((index > 0) && (index % items_count != 0)) {
            $(this).css('margin-left', margin + 'px');
          } else {
            $(this).css('margin-left', '0');
          }
        });
      });
    }

    $('div.list').flex();
    $(window).resize(function () {
      $('div.list').flex();
    });
  });

