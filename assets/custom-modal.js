$(document).ready(function(){
    const body = document.querySelector('body');
    const modal = document.getElementsByClassName('quickview-modal');
    
    $(".popupbutton").click(function(e){
        $('body').addClass('modal-open');
        console.log($(this).siblings(".quickview-modal"))
        $(this).siblings(".quickview-modal").show();
        e.stopPropagation();
        $('#overlay').show();
    });
    $('.close-button').click(function(){
        $('body').removeClass('modal-open');
        $(this).parent(".quickview-modal").hide();
        $('#overlay').hide();
    })
    $('body').click(function(e){
        $('body').removeClass('modal-open');
        if(!$(e.target).closest(modal).length){
        $(".quickview-modal").hide();
        $('#overlay').hide();
        }
    });
    
});
