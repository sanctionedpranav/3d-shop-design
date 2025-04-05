import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  console.log(file)
  return (
    <div className='filepicker-container'>
      <div className='flex flex-1 flex-col'>
        <input
          id='file-upload'
          type="file"
          accept='/image/*'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className='filepicker-label'>Upload File</label>

        <p className='mt-2 text-black text-sm truncate'>
          {file && file.name ? file.name : "No file selected"}
        </p>


        <div className='mt-4 flex flex-wrap gap-3'>
          <CustomButton
            type={'outline'}
            title={'Logo'}
            handleClick={() => readFile('logo')}
            customStyles={'text-xs'}
          />
          <CustomButton
            type={'filled'}
            title={'Full'}
            handleClick={() => readFile('full')}
            customStyles={'text-xs'}
          />
        </div>
      </div>
    </div>
  )
}

export default FilePicker