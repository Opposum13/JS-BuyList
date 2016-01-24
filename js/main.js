/**
 * Created by Student on 20.01.2016.
 */
$(function(){
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code

    var numberOfNames=3;
    var product = {
        name:"",
        amount:1
    };


    $("div.newName").hide();





    $('button.addButton').click(function(){
        $(this).css('font-size','25px');
    });

    $('button.deleteButton').click(function(){
        $(this).parent().parent().remove();
    });

    $('span.title').click(function(){
        $(this).hide();
        $("div.newName").show();
    });











});