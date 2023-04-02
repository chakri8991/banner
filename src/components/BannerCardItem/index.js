// Write your code here.

import './index.css'

const Banner = props => {
  const {bannerCards} = props
  const {headerText} = bannerCards
  return (
    <div className="card-1">
      <h1 className="h1">{headerText}</h1>
    </div>
  )
}

export default Banner
