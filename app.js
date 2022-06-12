// // Pre-loader START
// let loader = document.querySelector("#preloader")

// window.addEventListener('load', function () {

//     setTimeout(function () {
//         loader.style.display = 'none';

//     }, 2300)
// })
// Pre-loader END
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// Case Study 
(function () {
    $(".flex-container").waitForImages(
        function () {
            $(".spinner").fadeOut();
        },
        $.noop,
        true,
    );

    $(".flex-slide").each(function () {
        $(this).hover(
            function () {
                $(this).find(".flex-title").css({
                    transform: "rotate(0deg)",
                    top: "10%",
                });
                $(this).find(".flex-about").css({
                    opacity: "1",
                });
            },
            function () {
                $(this).find(".flex-title").css({
                    transform: "rotate(90deg)",
                    top: "15%",
                });
                $(this).find(".flex-about").css({
                    opacity: "0",
                });
            },
        );
    });
})();

/* proposal form */
$(function() {
  
    // contact form animations
    $('#speechBubble').click(function() {
      $('#proposalForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#proposalForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });
    
  });


/* proposal form */