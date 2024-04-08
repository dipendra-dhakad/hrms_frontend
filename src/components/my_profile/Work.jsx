import React from 'react'
import { BasicInfo } from './work/BasicInfo'
import { WorkInfo } from './work/WorkInfo'
import { WorkHistory } from './work/WorkHistory'
import ResignationInfo from './work/ResignationInfo'

export const Work = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-2">
    <div className="w-[40%]">
    <div>
      <BasicInfo/>
    </div>
    <div>
      <WorkInfo/>
    </div>
    <div>
      <WorkHistory/>
    </div>
    <div>
      <ResignationInfo/>
    </div>
    </div>
    </div>
   
  )
}
