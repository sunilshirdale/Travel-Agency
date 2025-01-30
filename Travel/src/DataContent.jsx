import img1 from './assets/images/gal1.jpg';
import img2 from './assets/images/gal2.jpg';
import img3 from './assets/images/gal3.png';
import img4 from './assets/images/gal4.jpg';
import img5 from './assets/images/gal5.webp';
import img6 from './assets/images/gal6.webp';
import {FaPlane,FaHotel,FaUmbrellaBeach,FaConciergeBell}  from 'react-icons/fa'
const destination = [
    {
        img: img1,
        title:'title1',
        description:'description1'
    },
    {
        img: img2,
        title:'title2',
        description:'description2'
    },
    {
        img: img3,
        title:'title3',
        description:'description3'
    },
    {
        img: img4,
        title:'title4',
        description:'description4'
    },
    {
        img: img5,
        title:'title5',
        description:'description5'
    },
    {
        img: img6,
        title:'title6',
        description:'description6'
    },
];
const service =[
    {
        icon: <FaPlane className='text-4xl text-blue-500'/>,
        title:'Flight Booking',
        description:'We provide easy and quick flight booking services to make your travel hassle-free.'
    },
    {
        icon: <FaHotel className='text-4xl text-blue-500'/>,
        title:'Hotel Booking',
        description:'Book hotels at the best prices with our exclusive deals and discounts.'
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500'/>,
        title:'Beach Tours',
        description:'Enjoy relaxing beach tours with our exclusive deals and discounts.'
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500'/>,
        title:'Concierge Services',
        description:'Get Perssonalized Concierge Services for a seamless travel experiences.'
    }
];
export{destination,service}