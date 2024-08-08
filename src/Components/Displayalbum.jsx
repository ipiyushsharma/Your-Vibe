import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const Displayalbum = () => {
    const {id}= useParams();
    const albumData= albumsData[id];
    console.log(albumData)
  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb--4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
                <img className='w-20 rounded-3xl mix-blend-screen inline-block' src={assets.spotify_logo} alt="" />
                <b className='ml-1 mr-4'>Yur Vibe</b>
                :) 1,323,154 likes
                 <b className='ml-3 mr-2'>:) 50 songs,</b>
                about 2 hrs 30 mins
            </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-8 '>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        
      </div>
      <hr />
      {
        songsData.map((item,index)=>(
            <div key={index} className='grid grid-cols-3 sm::grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7] hidden sm:block'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>5 days ago</p>
            </div>
        ))
      }
    </>
  )
}

export default Displayalbum
 