$(function(){
    getUserInfo()


    var layer = layui.layer


    $('#btnLogout').on('click',function(){
        layer.confirm('是否退出?', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem('token')
            location.href = '/login.html'
            
            layer.close(index);
          });
    })
})



//获取用户基本信息
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        //请求头配置对象
        
        success: function(res) {
            if (res.status !==0) {
                return layer.msg(res.message)
            }
            renderAvatar(res.data)
            console.log(res)
        }

        
    })
}


//渲染头像
function renderAvatar(user) {
    var name = user.nickname || user.username
    $('#welcome').html('欢迎'+name)
    if(user.user_pic !=null){
      $('.layui-nav-img').attr('src','user.user_pic').show()
      $('.text-avatar').hide()
    }else{
        var first= name[0].toUpperCase()
        $('.layui-nav-img').hide()
        $('.text-avatar').html(first).show()
    }
}
