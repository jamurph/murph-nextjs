import style from '../../styles/scss/components/header/HomeHeader.module.scss'
import Image from 'next/image';

import lion from '../../public/images/hero/LionLeap.png'


export default function HomeHeader(props){
    return (
        <div className={`${style.headerRoot} shadow-lg border border-secondary`}>
            <Image className={style.headerImg} src={lion} layout='responsive' placeholder='blur'/>
        </div>
    );
}


