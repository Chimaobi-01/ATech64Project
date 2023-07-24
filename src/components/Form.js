import React, { useState } from 'react'


export default function Form() {
  const [bool1, setBool1] = useState(false)
  const [bool2, setBool2] = useState(false)
  const visible1 = () => setBool1(!bool1)
  const visible2 = () => setBool2(!bool2)

  const [jsxArr, setJsxArr] = useState([])
  const addJsx = () => {
    const newItem = jsxArr.concat(
      <div className='my-3'>
        <span className='font-bold texl-xl p-3'>Spouse</span>
        <div className='flex gap-4 text-xl px-3'>Gender:
          <label><input type='radio' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500' /> Male</label>
          <label><input type='radio' /> Female</label>
        </div>
        <div className='flex gap-4 text-xl px-3'>Status:
          <label className='inline-flex items-center gap-2'><input type='radio' /> Alive</label>
          <label className='inline-flex items-center gap-2'><input type='radio' /> Dead</label>
        </div>
        <select className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="countries" >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    )
    setJsxArr(newItem)
  }
  const removeJsx = () => {
    const newArr = jsxArr.slice(1)
    setJsxArr(newArr)
  }

  return (
    <form className=' border rounded-2xl p-8 m-4 md:w-3/4 md:mx-auto'>
      <h1 className='text-center text-4xl '>New family member</h1>
      <fieldset className='w-full border p-4 rounded border-black'>
        <legend className='text-center text-3xl font-bold'>Personal</legend>
        <hr />
        <div className='flex gap-4 text-xl px-3'>Gender:
          <label><input type='radio' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2 focus:ring-blue-500' /> Male</label>
          <label><input type='radio' /> Female</label>
        </div>
        <div className='flex gap-4 text-xl px-3'>Status:
          <label className='inline-flex items-center gap-2'><input type='radio' /> Alive</label>
          <label className='inline-flex items-center gap-2'><input type='radio' /> Dead</label>
        </div>
        <input className='block w-full md:w-[95%] md:mx-auto bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' placeholder='Nomenclature..' />
        <div>
          <label>Picture:
            <label><input type='checkbox' /> No picture</label>
          </label>

          <div className="flex items-center justify-center w-max">
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 px-4">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 text-center"><span className="font-semibold">Click here to <br />insert a picture</span> or drag and drop</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

        </div>

      </fieldset>

      <fieldset className='w-full border p-4 rounded border-black'>
        <legend className='text-center text-3xl font-bold'>Parents</legend>
        <hr />
        <label><input type='checkbox' /> None</label>
        <div>
          <label><input type='checkbox' onChange={visible1} /> My mother</label>
          <div className={bool1 ? `` : `hidden`}>Status:
            <label><input type='radio' /> Alive</label>
            <label><input type='radio' /> Dead</label>
            <div>
              <label for="countries" >Select an option</label>
              <select className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="countries" >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

          </div>
        </div>
        <div>
          <label><input type='checkbox' onChange={visible2} /> My father</label>
          <div className={bool2 ? `` : `hidden`}>Status:
            <label><input type='radio' /> Alive</label>
            <label><input type='radio' /> Dead</label>
            <div>
              <label for="countries" >Select an option</label>
              <select className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="countries" >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

          </div>
        </div>
      </fieldset>

      <fieldset className='w-full border p-4 rounded border-black'>
        <legend className='text-center text-3xl font-bold'>My Spouse(s)</legend>
        <hr />
        {jsxArr.map(j => j)}
        <div className='flex gap-3 md:justify-end '>
          <div onClick={addJsx} className='border w-max border-2 hover:border-purple-500 px-3 py-2 rounded mt-4 cursor-pointer'> + Add a spouse</div>
          <div onClick={removeJsx} className='border w-max border-2 hover:border-red-500 px-3 py-2 rounded mt-4 cursor-pointer'> Remove a spouse</div>
        </div>


      </fieldset>
      <fieldset className='w-full border p-4 rounded border-black'>
        <legend className='text-center text-3xl font-bold'>My Information</legend>
        <hr />
        <label>Date and place of birth</label>
        <div className='flex'>
          <div className='w-full md:w-1/2'>
            <input className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type='date' />
          </div>
          <div className='w-full md:w-1/2'>
            <input className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='Birthplace...' />
          </div>

        </div>
        <label>Birth rank</label>
        <input className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='number' />
        <label>Email</label>
        <input className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='email' />
        <label>Phone</label>
        <input className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' placeholder='+234' />
        <label>Occupation</label>
        <input className='block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' />
        <label>Country and city of residence</label>
        <div>
          <input className='block w-full md:w-[95%] md:mx-auto bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' placeholder='Country...' />
          <input className='block w-full md:w-[95%] md:mx-auto bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' placeholder='City...' />
        </div>
        <label>Social links</label>
        <div className='flex w-full flex-wrap'>
          <div className='w-full md:w-1/2'>
            <input className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='Twiter' />
          </div>
          <div className='w-full md:w-1/2'>
            <input className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='Instagram' />
          </div>
          <div className='w-full md:w-1/2'>
            <input className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='Facebook' />
          </div>
          <div className='w-full md:w-1/2'>
            <input className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type='text' placeholder='thread' />
          </div>
        </div>
        <div>
          <label>About me</label>
          <textarea className='block md:w-[90%] appearance-none ps-4 w-full md:mx-auto bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id="aboutme" cols="30" rows="10" placeholder="About me ..."></textarea>
        </div>

      </fieldset>
      <div>
        <input type='submit' value='Send' className='m-2 p-2 px-4 cursor-pointer border rounded bg-blue-500 text-white' />
      </div>
    </form>
  )
}