"use client";
import React, { useRef, useState } from 'react'
import classes from "./image-picture.module.css";
import Image from 'next/image';
export default function ImagePicter({label,name}) {
  const [imagePicker, setImagePicker] = useState();
  const imageInput = useRef();
  function handleClick(){
    imageInput.current.click();
  }
  function handleImagePicker(event){
    const file = event.target.files[0];
    if(!file){
      setImagePicker(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
      setImagePicker(fileReader.result)
    }
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePicker && <p>No image picked yet!</p>}
          {imagePicker && <Image src={imagePicker} alt="image picture to submit in shared meals" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>}
        </div>
        <input className={classes.input} type="file" id={name} accept='image/png, image/jpeg' name={name} ref={imageInput} onChange={handleImagePicker}/>
        <button className={classes.button} type="button" onClick={handleClick}>Pick an image</button>
      </div>
    </div>
  )
}
