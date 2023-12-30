import React from 'react'
import Firstnav from '../layout/firstnav'
import Secondnav from '../layout/secondnav'

export default function Lightroom() {
  return (
    <div>
      <Firstnav/>
      <Secondnav/>
      <div className='lightroomdiv ms-5 mt-5'>
       
       <h1 className='lightroomheader ms-3'>About Lightroom:</h1>
       <h5 className='lightroomheaderfive ms-5'>Adobe Lightroom is a photo editing and storage application that is available through the Adobe Creative Cloud. It is a cloud-based solution.Collaboration tools, Customizable presets, Custom categorization, Mobile access, Image labels, Level adjustment, Intelligent image search, Cropping and rotating, Focus shifting, Import/export.</h5>
       <h6 className='lightroomheadersix ms-5'>Adobe Lightroom (officially Adobe Photoshop Lightroom) is a piece of image organization and image processing software developed by Adobe Inc. as part of the Creative Cloud subscription family. It is supported on Windows, macOS, iOS, Android, and tvOS (Apple TV). Its primary uses include importing, saving, viewing, organizing, tagging, editing, and sharing large numbers of digital images.[7] Lightroom's editing functions include white balance, presence, tone, tone curve, HSL, color grading, detail, lens corrections, and calibration manipulation, as well as transformation, spot removal, red eye correction, graduated filters, radial filters, and adjustment brushing. The name of the software is based on darkrooms used for processing light-sensitive photographic materials.</h6>
       <div className='lightroomimg mt-4'></div>
       </div>
    </div>
  )
}
