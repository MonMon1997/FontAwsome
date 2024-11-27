const x = document.getElementById('btn-close')

$(function () {
    $("#btn-close").click(function (e) { 
        e.preventDefault();
        $("#container_offer").hide();
    });
});

$(function () {
    // 获取焦点时，设置边框
    $("#form_search").focus(function () {  
        $(".search_form").css("border", "5px solid black");
    });

    // 失去焦点时，移除边框
    $("#form_search").blur(function () {
        $(".search_form").css("border", "3px solid black");
    });
});