import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './ ShopSlider/Slider';

let slides = [
    {
      id:1,
      background: "http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/slideshow/a01.jpg",
      text: [
        {
          id:'1/1',
          subject: 'Customizable Theme',
          textAnimation: 'ShiningTextAnimation',
          textStyles: {
            font: '36px bold',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            color:'black',
            margin: '5px 0px',
            width: 'max-content',
          }
        },
        {
          id:'1/2',
          subject: 'You can change colors of almost every element',
          textAnimation: 'fadeInRight',
          textStyles: {
            fontSize: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            color:'black',
            margin: '5px 0px',
            width: 'max-content'
          }
        },
        {
          id:'1/3',
          subject: 'You have never seen so many options',
          textAnimation: 'fadeInRight',
          textStyles: {
            fontSize: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            color:'black',
            margin: '5px 0px',
            width: 'max-content'
          }
        },
      ],
      textbackground: 'rgba(0, 0, 0, 0.6);',
      link: "http://ohindustry.com/",
      testStyle: {
        top:'30px',
        right:'30px',
      },
      textAnimation: 'ShiningTextAnimation'
    },
    

    
    {
      id:2,
      background: "http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/slideshow/a02.jpg",
      text: [
          {
            id:'2/1',
            subject: 'Responsive',
            textAnimation: 'fadeInRight',
            textStyles: {
              fontSize: '26px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color:'#ffff',
              margin: '5px 0px',
              width: 'max-content'
            }
          },
          {
            id:'2/2',
            subject: 'This theme can adapt to any mobile screen resolution',
            textAnimation: 'bounceInRight',
            textStyles: {
              fontSize: '16px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color:'#ffff',
              margin: '5px 0px',
              width: 'max-content'
            }
          },
      ],
      link: "https://thesnowmag.com",
      testStyle: {
        bottom:'50px',
        left: '60px',
        
      },
    },
    
    {
      id:3,
      background: "http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/slideshow/a03.jpg",
      text: "Super Promo",
      link: "https://thumbor.forbes.com",
      testStyle: {
        bottom:'50px',
        left: '100px'
      },
      textAnimation: 'fadeInDown'
    },
    {
      id: 4,
      background: 'http://ultimo.infortis-themes.com/demo/media/wysiwyg/infortis/slideshow/a04.png',
      text: '',
      link: '',
      icon: '',
      testStyle: {
        bottom:'50px',
        left: '100px'
      },
      textAnimation: 'fadeInDown'
    }
  ]
const App = () => {
    return (
        <div>
            <Slider 
                slides={slides}
                autoplay={false}
                autoplayHoverPause={false}
                autoplayTimeout={4000}
            />
        </div>
    )
}

export default App;
