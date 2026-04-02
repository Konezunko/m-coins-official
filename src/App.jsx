import React from 'react'
import MedicalSupportSite from './MedicalSupportSite'

const defaultProps = {
  heroTitle: "クリニックのIT・AI化を\n圧倒的コスパで実現",
  heroSubtitle: "ホームページ制作1万円〜。AI予約・チャットボット・問診システムまで。\n補助金活用で実質半額。札幌の医療AIの専門家にお任せください。",
  primaryColor: "#005A9C",
  secondaryColor: "#E6F3FF",
  phoneNumber: "080-5839-0797",
}

function App() {
  return (
    <div className="min-h-screen">
      <MedicalSupportSite {...defaultProps} />
    </div>
  )
}

export default App
