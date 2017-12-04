import React from 'react'

class MessageContainer extends React.Component {

    constructor() {
        super();
        //localStorage.username='再见';

    }

    render() {
        var divStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width:1920,
            height: 1080
        }
        console.log(ImagesConfig.image01.url)
        //var image01 = ImagesConfig.image01.url;

        var icon01 = ImagesConfig.custom ?
            require('../../../../public/imagesConfig/custom/slide1.jpg') :
            require('../../../../public/imagesConfig/default/slide1.jpg') ;


        return (

            <div className={'slider'} style={divStyle}>


                <ul className={"slider-main"}>
                    <li className={"slider-panel"}>
                        <img src={icon01} ></img>
                    </li>

                </ul>

            </div>
        )
    }
}



export default MessageContainer;
