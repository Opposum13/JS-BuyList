/**
 * Created by Student on 20.01.2016.
 */
$(function(){
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code


    $('button.addButton').click(function(){
        var newElem = $("#inp").val();
        if(newElem!==""){
            $("#inp").val("");
            $("div.left").append('<div class="d3 d4 ">'+
                '<div class="elem t">'+
                ' <span class="title ">'+newElem+'</span>'+
                ' </div>'+
                '<div class="elem padL5">'+
                '<button class="circButton min plMinButt te" >'+
                '<i class="minicon">-</i>'+
                '</button>'+
                '<span class="numb pad5">1</span>'+
                '<button class="circButton pl plMinButt te">'+
                '<i class="plusicon">+</i>'+
                '</button>'+
                '</div>'+
                '<div class="elem te2 pad50">'+
                '<button class="boughtButt margR5">Куплено</button>'+
                '<button class="deleteButton" title="Видалити" style="margin-left: 5px;">'+
                '<i class="remove icon"></i>'+
                '</button>'+
                '</div>'+
                '</div>');


            $("div.notB").append('<div class="notBoughtElements margT">'+
                '<span class="title"><b>'+newElem+'</b></span>'+
                '<span class="miniLabel"><b>1</b></span>'+
            '</div>');
        }


    });

    $('button.deleteButton').click(function(){
        var name=$(this).parent().find(".elem").find(".title").text();
        $(this).parent().parent().remove();
    });



    $('button.pl').click(function(){
        var t=$(this).parent().find(".numb").text();
        var num=1;
        for(var n=1;n<20;n++){
            if(n==t){
                num=n+1;
                break;
            }
        }

        $(this).parent().find(".numb").text(num);
    });

    $('button.min').click(function(){
        var t=$(this).parent().find(".numb").text();
        var num=1;
        for(var n=20;n>1;n--){
            if(n==t){
                num=n-1;
                break;
            }
        }

        $(this).parent().find(".numb").text(num);
    });




    $('span.title.a').click(function(){
        $(this).hide();
        var name=$(this).text();
        $(this).parent().append("<div class='newN'><input type='text' class='newName' value='"+name+"'></div>");
        $('body').dblclick(function(){
            var newN=$('input.newName').val();
            $('div.newN').parent().append('<span class="title a">'+newN+'</span>');
            $('div.newN').remove();

        });
    });














});