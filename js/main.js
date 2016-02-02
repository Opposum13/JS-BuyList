/**
 * Created by Student on 20.01.2016.
 */
$(function(){

    var list = $('.all-items');
    var one_item = '<div class="d3 d4 ">'+
        '<div class="elem t">'+
        ' <span class="title a">'+'Title'+'</span>'+
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
        '</div>';

    function createNewElement(newElem){

        var node = $(one_item);
        node.find('.title').text(newElem);


        var node2 ='<div class="notBoughtElements margT">'+
            '<span class="title title1"><b>'+newElem+'</b></span>'+
            '<span class="miniLabel"><b>1</b></span>'+
            '</div>';


        list.append(node);
        $("div.notB").append(node2);

        node.find('.deleteButton').click(function(){
            var name=$(this).parent().find(".elem").find(".title").text();
            $(this).parent().parent().remove();
        });



        node.find('.pl').click(function(){
            var value = (node).find('.numb').text();
            value = parseInt(value)+1;
            console.log('Value',value);

            $(node).find(".numb").text(value);
        });

        node.find('.min').click(function(){
            var value = (node).find(".numb").text();
            value = parseInt(value);
            if(value<=1){
                value  = 1;
            } else {
                value -=1;
            }

            (node).find(".numb").text(value);
        });


        node.find('.deleteButton').click(function(){
            //delete from list
            node.remove();
            //TODO: delete from right panel
            //I advise redraw all the right panel

        });


        //TODO: fix it
        node.find('title').click(function(){
            $(this).hide();
            var name=$(this).text();
            $(this).parent().append("<div class='newN'><input type='text' class='newName' value='"+name+"'></div>");
            $('body').dblclick(function(){
                var newN=$('input.newName').val();
                $('div.newN').parent().append('<span class="title a">'+newN+'</span>');
                $('div.newN').remove();

            });
        });

    }



    $('.addButton').click(function(){
        var newElem = $("#inp").val();
        if(newElem!==""){
            createNewElement(newElem);
            $("#inp").val("");
        }


    });

    createNewElement("Помідори");
    createNewElement("Печиво");
    createNewElement("Сир");


});