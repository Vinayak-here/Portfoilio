import React from 'react'
import TitleHeader from '../components/TitleHeader'
import {  techStackImgs } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })
    return (
        <div id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I bring to the Table"
                />

                <div className='tech-grid'>
                   


                    {/* This is for the img part */}
                    {techStackImgs.map((techStackIcon, index) => (
                        <div
                            key={index}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img
                                        src={techStackIcon.imgPath}
                                        alt="logo"
                                        className={`${techStackIcon.size} object-contain ` }
                                    />

                                </div>
                                <div className="padding-x pb-7 w-full">
                                    <p>{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack