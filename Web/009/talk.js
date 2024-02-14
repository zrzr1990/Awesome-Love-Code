$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小姐姐您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('我要告诉姥姥', B);
}

function B() {
    modal('你在', C);
}

function C() {
    modal('2024年', D);
}

function D() {
    modal('2月', E);
}

function E() {
    modal('12日', F);
}

function F() {
    modal('金猪拱门', G);
}

function G() {
    modal('(^_^)', H);
}

function H() {
    modal('(^_^)', I);
}

function I() {
    modal('(^_^)', J)
}

function J() {
    modal('爱你呦！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
