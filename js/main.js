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


    var rightColumnList=$('.notB');
    var one_right_item='<div class="notBoughtElements margT">'+
        '<span class="title title1"><b>'+'title2'+'</b></span>'+
        '<span class="miniLabel"><b>1</b></span>'+
        '</div>';


    var rightBought=$('.bought');
    var bought_item='<div class="notBoughtElements margT">'+
        '<span class="title title2 lt"><b>'+'title3'+'</b></span>'+
        '<span class="miniLabel lt"><b>1</b></span>'+
        '</div>';


    var notBButton='<button class="boughtButt margR5 notBButt">Не куплено</button>';

    var renameInput="<div class='newN'><input type='text' class='newName' value='"+"newName"+"'></div>";


    function createNewElement(newElem){

        var node = $(one_item);
        node.find('.title').text(newElem);


        var node2 =$(one_right_item);
        node2.find('.title1').text(newElem);

        var node3=$(bought_item);
        node3.find('.title2').text(newElem);

        list.append(node);
        rightColumnList.append(node2);
        rightBought.append(node3);
        node3.hide();

//        node.find('.deleteButton').click(function(){
//            var name=$(this).parent().find(".elem").find(".title").text();
//            $(this).parent().parent().remove();
//        });


        node.find('.boughtButt').click(function(){

            (node).find('.circButton').hide();
            (node).find('.boughtButt').hide();
            (node).find('.deleteButton').hide();
            node2.hide();
            node3.show();
            (node).find('.te2').append(notBButton);

            node.find('.notBButt').click(function(){
                node3.hide();
                node2.show();
                (node).find('.circButton').show();
                (node).find('.boughtButt').show();
                (node).find('.deleteButton').show();
                node.find('.notBButt').hide();

            });
        });

        node.find('.pl').click(function(){
            var value = (node).find('.numb').text();
            value = parseInt(value)+1;
            console.log('Value',value);

            $(node).find(".numb").text(value);
            (node2).find('.miniLabel').text(value);
            (node3).find('.miniLabel').text(value);
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
            (node2).find('.miniLabel').text(value);
            (node3).find('.miniLabel').text(value);
        });


        node.find('.deleteButton').click(function(){
            //delete from list
            node2.remove();
            //delete from right panel
            node.remove();



        });


        node.find('.title').click(function(){
            var name=(node).find('.title').text();
            node.find('.title').hide();
            node.find('.elem.t').append(renameInput);
            node.find('.newName').val(name);
            node.find('.newName').focusout(function(){
                var newN=node.find('.newName').val();
                node.find('.newName').remove();
                node.find('.title').text(newN);
                node.find('.title').show();
                node2.find('.title1').text(newN);
            });
        });

    }



    $('.addButton').click(function(){
        var newElem = $("#inp").val();
        if(newElem!==""){
            createNewElement(newElem);
            $("#inp").val("");
            $("#inp").focus();
        }


    });

    createNewElement("Помідори");
    createNewElement("Печиво");
    createNewElement("Сир");


});