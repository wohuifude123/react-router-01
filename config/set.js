/**
 * 首页图片轮播全局变量，应用过程中不要进行修改
 * 作者：Abbott.liu
 * 时间：2017年12月3日
 */
var ImagesConfig = (function(){

    return {
        // 是否开启图片轮播功能
        imagePlay: true,
        // 轮播起始位置
        currentIndex : 0,
        // 图片轮播间隔
        time : 3000,
        // 是否开启读取自定义图片
        custom: true,
        // 轮播图片路径
        image01:{
            url:'../../../../public/imagesConfig/custom/slide1.jpg'
        },
        image02:{
            url:'../../../../public/imagesConfig/custom/slide2.jpg'
        },
        image03:{
            url:'../../../../public/imagesConfig/custom/slide3.jpg'
        },
        image04:{
            url:'../../../../public/imagesConfig/custom/slide4.jpg'
        },
        image05:{
            url:'../../../../public/imagesConfig/custom/slide5.jpg'
        },
        image06:{
            url:'../../../../public/imagesConfig/custom/slide6.jpg'
        }
    }
})();
