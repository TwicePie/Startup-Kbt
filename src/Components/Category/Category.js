import React from 'react'
import './Category.css'
import category1 from '../Assets/category1.png'
import category2 from '../Assets/category2.png'
import category3 from '../Assets/category3.png'
import category4 from '../Assets/category4.png'


export default function Category() {
  return (
    
    <div className='category'>
      <h1>CATEGORY</h1>
      <div className='category-container'>
      <div className="category-item">
        <a target='/health' href='/category/health'>
          <img src={category1} alt='' width="600" height="400"/>
        </a>
        <div className="desc">Health</div>
      </div>

      <div className="category-item">
        <a target='/health' href='/category/software'>
          <img src={category2} alt='' width="600" height="400"/>
        </a>
        <div className="desc">Software</div>
      </div>

      <div className="category-item">
        <a target='/health' href='/category/social'>
          <img src={category3} alt='' width="600" height="400"/>
        </a>
        <div className="desc">Social</div>
      </div>

      <div className="category-item">
        <a target='/health' href='/category/technology'>
          <img src={category4} alt='' width="600" height="400"/>
        </a>
        <div className="desc">Technology</div>
      </div>

      </div>

    </div>
  )
}
