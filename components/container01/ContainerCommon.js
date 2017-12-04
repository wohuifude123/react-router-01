import React from 'react'

class ContainerCommon extends React.Component {

    constructor() {
        super();
        //localStorage.username='再见';
    }

    start() {
        console.log('终于开始了')
    }

    _initKeyDown() {

        var that= this;

        require.ensure([], (require) => {

            var $ = require('jquery')

            $(document).ready(function() {

                that.start()
                /**
                 * 停止轮播
                 */
                function stop() {
                    clearInterval(interval_id);
                    hasStarted = false;
                }
            })

        },'CarouselScreenShortUp1')

    }

    _init() {


        var that= this;


        var interval_id = 0;
        require.ensure([], (require) => {
            //require('../../lib/jquery.flexslider');
            //var $ = require('jquery') + require('../../lib/jquery.flexslider');
            var $ = require('jquery')

            $(document).ready(function() {
                var length = 0,
                    currentIndex = 0,
                    hasStarted = false, //是否已经开始轮播
                    t = 3000; //轮播时间间隔


                that.start();

                /**
                 * 停止轮播
                 */
                function stop() {
                    clearInterval(interval_id);
                    hasStarted = false;
                }
            })

        },'CarouselScreenJqueryShortUp2')

    }

    componentDidMount() {

        // 初始化图片地址
        console.log('初始化第一')
        this._init()

        console.log('第二初始化')
        this._initKeyDown()
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}



export default ContainerCommon;




