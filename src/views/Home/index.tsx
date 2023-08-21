import React, { useState } from 'react'
import HomeStyle from './index.module.scss'
import { uiList } from './config'
function Home() {
  const [keyWords, setKeyWords] = useState('')
  const [ulist, setUlist] = useState(uiList)
  const goAboutPage = (item) => {
    console.log('跳转git', item)
    // window.open(item.git)
    window.open(item.url, '', 'height=850,width=400,scrollbars=yes,status =yes')
  }
  const userArr = ulist.map((item, index) => (
    <img className={HomeStyle.item} src={'./img/' + item.img} key={index} onClick={() => goAboutPage(item)} />
  ))

  const getUiList = () => {
    const ul = uiList().filter((item) => item.desc.includes(keyWords))
    console.log('你按了回车键...', keyWords, ul)
    setUlist(ul)
  }
  const keySearchData = (e) => {
    if (e.which !== 13) return
    getUiList()
  }
  const searchBox = (
    <input
      onChange={(e) => {
        setKeyWords(e.target.value)
      }}
      value={keyWords}
      onKeyDown={(e) => keySearchData(e)}
    />
  )
  return (
    <div className={HomeStyle.home}>
      <div className={HomeStyle.search}>{searchBox}</div>
      <div className={HomeStyle.list}>{userArr}</div>
    </div>
  )
}

export default Home
