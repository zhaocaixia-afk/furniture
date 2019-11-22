window.onload = function () {
    //方法一：点击让 联系我们的div显示和隐藏
    //取屏幕宽度 与 高度
    var x = document.documentElement.clientWidth;
    var y = document.documentElement.clientHeight;
    //在线留言
    var message_container = document.querySelector('.message_container');
    message_container.style.width = x + 'px';
    message_container.style.height = y + 'px';
    var message = document.querySelector('.nav_list').querySelector('.message');
    message.onclick = function () {
        message_container.style.display = 'block'
        return false;
    }
    var close = document.querySelectorAll('.close');
    close[0].onclick = function () {
        message_container.style.display = 'none'
    }
    //联系我们
    var contact_container = document.querySelector('.contact_container');
    contact_container.style.width = x + 'px';
    contact_container.style.height = y + 'px'
    var contact = document.querySelector('.nav_list').querySelector('.contact');
    contact.onclick = function () {
        contact_container.style.display = 'block'
        return false
    }
    close[1].onclick = function () {
        contact_container.style.display = 'none'
    }

    //新闻详情页面
    var news_old = document.querySelector('.news_old');
    var news_new = document.querySelector('.news_new');
    var move_list = document.querySelector('.move_list');
    var a = move_list.querySelectorAll('a');
    for (var i=0;i<a.length;i++){
        a[i].onclick = function () {
            news_old.style.display = 'none';
            news_new.style.display = 'block';
        }
    }
}