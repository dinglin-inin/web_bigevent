//每次调用会先调用这个函数
$.ajaxPrefilter(function (options) {
    

    options.url = 'http://ajax.frontend.itheima.net' + options.url

    //统一为有权限的接口设置headers
    if (options.url.indexOf('/my/') !==-1) {
        options.headers= {
            Authorization: localStorage.getItem('token'||'')
        }
    }

    //全局统一挂载
    options.complete = function(res){
        if(res.responseJSON.status ===1 && res.responseJSON.message === '身份认证失败！'){
            
            location.href = '/login.html'
            localStorage.removeItem('token')
        }
    }
    


})