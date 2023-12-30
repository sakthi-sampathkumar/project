import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'

export default function Unitynav() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='unitydiv ms-5 mt-5'>
       
      <h1 className='unityheader ms-3'>About Unity:</h1>
      <h5 className='unityheaderfive ms-5'>Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms. It is particularly popular for iOS and Android mobile game development, is considered easy to use for beginner developers.The engine can be used to create three-dimensional (3D) and two-dimensional (2D) games, as well as interactive simulations and other experiences. The engine has been adopted by industries outside video gaming, such as film, automotive, architecture, engineering, construction, and the United States Armed Forces.</h5>
      <h6 className='unityheadersix ms-5'>Unity 2021 brought multiple new features such as Bolt, Unity's Visual Scripting system, a new multiplayer library to support multiplayer games, improved Il2cpp runtime performance, Volumetric clouds for the High Definition Render pipeline. Shadow caching and Screen Space Global Illumination for HDRP.For the Universal Render Pipeline it added new features such as point light shadows, Deferred renderer and general core engine improvements and fixes. Full Apple Silicon support was also added in Unity 2021.2. Unity Hub support for Apple Silicon editors arrived in version 3.0 in January 2022.

Changes to Unity 2022 were intended to improve productivity by reducing the time required to enter play mode and import files, and implementing visual search queries and multi selection in the package manager. For 2D projects, changes focused on accelerating core software, import, animation, and physics. Sprite atlasing was revised. Support for PSD extension files and layer management were added to the 2D PSD Importer, and Delaunay tessellation for 2D physics was added.

On October 9, 2023, Unity announced that Riccitiello would be leaving the company, appointing Jim Whitehurst as interim CEO and President.

On November 16, 2023, Unity announced that the next version of the engine would be called Unity 6, reverting back to the previous version numbering convention. Unity 6 is planned for release in 2024, with planned features including new generative AI tools called Unity Muse and Unity Sentis.</h6>
      <div className='unityimg mt-4'></div>
      </div>
    </div>
  )
}
