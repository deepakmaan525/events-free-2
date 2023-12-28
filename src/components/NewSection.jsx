import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import monkey from "../assets/images/monkey.png"
import line from "../assets/images/line-img.png"
import newimg from "../assets/images/circle-img.png"
import circle from "../assets/images/circularimg.png"
const NewSection = () => {
    return (
        <div className='bg-black min-vh-100'>
            <Container >
                <div className='d-flex flex-col xxl-row'>
                    <div className="position-relative d-flex align-items-center">
                        <img className='circle-position d_none xxl-block' src={circle} alt="" />
                        <img className='pe-5' src={monkey} alt="" />
                    </div>
                    
                    <div>
                        <div className='d-flex'>
                            <img className=' object-fit-contain d_none d-md-block' src={line} alt="" />
                            <img className=' object-fit-contain d_none d-md-block' src={newimg} alt="" />
                            <div className='d-flex flex-column justify-content-center'>
                                <p className='text-white'>Phase 1</p>
                                <p className='text-white'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>
                        <div className='d-flex xxl-pl-79 pl-0'>
                            <img className=' object-fit-contain d_none d-md-block' src={line} alt="" />
                            <img className=' object-fit-contain d_none d-md-block' src={newimg} alt="" />
                            <div className='d-flex flex-column justify-content-center'>
                                <p className='text-white'>Phase 1</p>
                                <p className='text-white'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>
                        <div className='d-flex xxl-pl-120 pl-0'>
                            <img className=' object-fit-contain d_none d-md-block' src={line} alt="" />
                            <img className=' object-fit-contain d_none d-md-block' src={newimg} alt="" />
                            <div className='d-flex flex-column justify-content-center'>
                                <p className='text-white'>Phase 1</p>
                                <p className='text-white'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>
                        <div className='d-flex xxl-pl-79 pl-0'>
                            <img className=' object-fit-contain d_none d-md-block' src={line} alt="" />
                            <img className=' object-fit-contain d_none d-md-block' src={newimg} alt="" />
                            <div className='d-flex flex-column justify-content-center'>
                                <p className='text-white'>Phase 1</p>
                                <p className='text-white'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>
                        <div className='d-flex '>
                            <img className=' object-fit-contain d_none d-md-block' src={line} alt="" />
                            <img className=' object-fit-contain d_none d-md-block' src={newimg} alt="" />
                            <div className='d-flex flex-column justify-content-center'>
                                <p className='text-white'>Phase 1</p>
                                <p className='text-white'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewSection
