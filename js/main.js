var Dashboard = function () {
  var global = {
    tooltipOptions: {
      placement: "right"
    },
    menuClass: ".c-menu"
    };

    var menuChangeActive = function menuChangeActive(el) {
        var hasSubmenu = $(el).hasClass("has-submenu");
        $(global.menuClass + " .is-active").removeClass("is-active");
        $(el).addClass("is-active");

        if (hasSubmenu) {
          $(el).find("ul").slideDown();
        }
    };

    var sidebarChangeWidth = function sidebarChangeWidth() {
        var $menuItemsTitle = $("li .menu-item__title");

        $("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
        $(".hamburger-toggle").toggleClass("is-opened");

        if ($("body").hasClass("sidebar-is-expanded")) {
            $('[data-toggle="tooltip"]').tooltip('dispose');
        } else {
            $('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
        }
    };

  return {
    init: function init() {
      $(".js-hamburger").on("click", sidebarChangeWidth);

      $(".js-menu li").on("click", function (e) {
        menuChangeActive(e.currentTarget);
      });

      $('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
    }
  };
}();

jQuery(document).ready(function ($) {
  Dashboard.init();

  var date = new Date();
  if(date.getDate() < 5 && date.getMonth() === 8 && date.getFullYear() === 2019) {
    var addNew = $('.fa-graduation-cap').parent();
    var div = `<span class="badge badge-pill badge-danger" style="position: absolute; top: 0; right: 0;">New</span>`;
    $(addNew).append(div);
  }

  $('.logout').on('click', function () {
    var expires = "";
    var name = 'user';
    var value = '';
    var expires  = "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    document.cookie = name + "=" + (value || "")  + expires + "; path=/just-thai";
    window.document.location.href = '/just-thai';
  });
});
