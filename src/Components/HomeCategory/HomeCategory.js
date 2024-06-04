import React from 'react'
import './HomeCategory.css'


export default function HomeCategory() {
  return (
    <div>

        <div className='homecategory'>
      <div className='category-container'>
      <div className="category-item">
        <a target='/health' href='/category/health'>
        <button class="button-28" role="button">Health</button>
        </a>
      </div>

      <div className="category-item">
        <a target='/health' href='/category/software'>
        <button class="button-28" role="button">Software</button>
        </a>
      </div>

      <div className="category-item">
        <a target='/health' href='/category/social'>
        <button class="button-28" role="button">Social</button>
        </a>
      </div>

      <div className="category-item">
        <a target='/health' href='/category/technology'>
        <button class="button-28" role="button">Technology</button>
        </a>
      </div>

      </div>

    </div>
    </div>
  )
}


