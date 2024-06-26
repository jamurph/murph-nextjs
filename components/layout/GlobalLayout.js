import Head from "next/head"
import MainFooter from "../footer/MainFooter"
import HeaderNavigation from "../navigation/HeaderNavigation"
import Transition from "../transition/Transition"

import bg from '../../public/images/background/maze.png'
import LoadingSpinner from "../navigation/LoadingSpinner"

export default function GlobalLayout({title,description,children}) {
    return (
            <main className={`position-relative`}  style={{backgroundImage: `url(${bg.src})`, backgroundRepeat:'repeat', backgroundPosition: 'top'}}>
                
                    <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <LoadingSpinner key="lightloader"/>
                    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        <div style={{'position': 'relative', zIndex: '2'}}>
                            <HeaderNavigation/>
                        </div>
                        
                        <div style={{'position': 'relative', zIndex: '0', paddingTop: '85px', flexGrow: '1'}}>
                            <Transition>{children}</Transition>
                        </div>
                        <div style={{'position': 'relative', zIndex: '1'}}>
                            <Transition><MainFooter /></Transition>
                        </div>
                    </div>
                
            </main>
    );
  }