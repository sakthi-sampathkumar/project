import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'

export default function Aftereffects() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='aftereffectsdiv ms-5 mt-5'>
       
       <h1 className='aftereffectsheader ms-3'>About After Effects:</h1>
       <h5 className='aftereffectsheaderfive ms-5'>Adobe After Effects is a software application that allows users to create motion graphics, special effects, and video compositing. It's used in the post-production process of film, video games, and television production.</h5>
       <h6 className='aftereffectsheadersix ms-5'>Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc.; it is used in the post-production process of film making, video games and television production. Among other things, After Effects can be used for keying, tracking, compositing, and animation. It also functions as a very basic non-linear editor, audio editor, and media transcoder. In 2019, the program won an Academy Award for scientific and technical achievement.Plug-ins are predominantly written in C or C++ and extend the functionality of After Effects, allowing for more advanced features such as particle systems, physics engines, 3D effects, and the ability to bridge the gap between After Effects and another application.After Effects Extensions offer the ability to extend After Effects functionality through modern web development technologies like HTML5, and Node.js, without the need for C++.

After Effects Extensions make use of Adobe's Common Extensibility Platform or CEP Panels, which means they can be built to interact with other Adobe CC apps.</h6>
       <div className='aftereffectsimg mt-4'></div>
       </div>
    </div>
  )
}
