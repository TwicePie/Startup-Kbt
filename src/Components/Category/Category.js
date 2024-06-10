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
 

      <div class="card">
      <a target='/health' href='/category/health'>
          <img src={category1} alt=''/>
        </a>
        <div class="container">
          <h2><b>Health</b></h2>
          <p>Blank</p>
          </div>
        </div>

        <div class="card">
      <a target='/health' href='/category/software'>
          <img src={category2} alt=''/>
        </a>
        <div class="container">
          <h2><b>Software</b></h2>
          <p>Blank</p>
          </div>
        </div>

        <div class="card">
      <a target='/health' href='/category/social'>
          <img src={category3} alt=''/>
        </a>
        <div class="container">
          <h2><b>Social</b></h2>
          <p>Blank</p>
          </div>
        </div>

        <div class="card">
      <a target='/health' href='/category/technology'>
          <img src={category4} alt=''/>
        </a>
        <div class="container">
          <h2><b>Technology</b></h2>
          <p>Blank</p>
          </div>
        </div>

        


      </div>

    </div>
  )
}
