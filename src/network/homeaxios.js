import {request} from "@/network/require";

export function getCarouselPic() {
    return request({
        url:"http://127.0.0.1/api/data",
        method:"get"
    })
}

// 1. 根据地理位置获取位置详情
// 2. 获取商家列表信息
// 3. 根据经纬度获取商铺列表
// 4. 根据经纬度和关键字搜索商家信息
// 5. 获取一次性密码
// 6. 用户密码登录
// 7. 发送短信验证码
// 8. 手机号验证码登录
// 9. 根据会话获取用户信息
// 10. 用户登录 身份认证
