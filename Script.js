$(document).ready(function(){
    $('.ulList li:even').css({'background-color':'#DDD'})
    $('.ulList li:odd').css({'background-color':'#848484'})
    
    $('.Aj').click(function(){
            if($('.Titre').val()!=""){  
            $('.ulList').append("<li><span class='acheter'></span>"+$('.Titre').val()+"<span class='Remove'>x</span></li>");
            $('.ulList li:even').css({'background-color':'#DDD'});
            $('.ulList li:odd').css({'background-color':'#848484'});
        }
 
        $('.Titre').val("");
    });

    $('#ulList').on( 'click', 'li .Remove', function(){
        $(this).parent().remove();
        $('.ulList li:even').css({'background-color':'#DDD'});
        $('.ulList li:odd').css({'background-color':'#848484'});
    });
    
    $('ul').on('click', 'li',function(){
        if($(this).children().first().html()==""){
            $(this).children().first().html("&#10004");
            $(this).css({'text-decoration': 'line-through','color':'white'});
        }else{
            $(this).children().first().html("");
            $(this).css({'text-decoration': 'none','color':'Black'});
        }
    });
});
