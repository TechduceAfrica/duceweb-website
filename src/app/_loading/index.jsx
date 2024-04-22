import Image from 'next/image'
import { loadingLogoFile } from '@/webCopy/navContent'
import style from './loading.module.css'


export default function Loading() {

    return (
        <div className={style.loading__screen}>
            <div className={style.loading__img}>
                <Image {...loadingLogoFile} priority={true}/>
            </div>
            <div className={style.loading__balls}>
                <span style={{ '--spd': 1 }}></span>
                <span style={{ '--spd': 2 }}></span>
                <span style={{ '--spd': 3 }}></span>
                <span style={{ '--spd': 4 }}></span>
            </div>
        </div>
    )
}
