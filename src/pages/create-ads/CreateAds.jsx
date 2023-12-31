import React, { useState } from 'react'

import './CreateAds.css'
import Card from './components/card/Card'
import FormData from './components/form-data/FormData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function CreateAds() {
    const [textAd, setTextAd] = useState(false);
    const [mediaAd, setMediaAd] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const onClickHandler = () => {
        if (!textAd && !mediaAd) {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false)
                setToggle(false);
            }, 250)
        }
        else {
            setToggle(!toggle);
        }
    }

    const submitHandler = (values) => {
        if (values) {
            const output = {...values, 'text_ad': textAd, 'media_ad': mediaAd}
            console.log(output)
            setIsSubmit(true);
            setTimeout(() => {
                setIsSubmit(false);
                setToggle(false)
                setTextAd(false)
                setMediaAd(false);
            }, 600)
        }
    }

    return (
        <div className='create-wrapper'>
            <div className='ads-wrapper'>
                <p className='title'>
                    {!toggle ? 'Create Ads' : 'Create Text & Media'}
                </p>

                {
                    !toggle &&
                    <div className='wrapper'>
                        <div className='checkbox-warpper'>
                            <Card
                                changeValue={setTextAd}
                                animate={animate}
                                defaultValue={textAd}
                            />
                            <Card
                                changeValue={setMediaAd}
                                animate={animate}
                                defaultValue={mediaAd}
                            />
                        </div>
                        <div className='create-bottom'>
                            <button
                                className='btn next-btn'
                                onClick={() => onClickHandler()}
                            >Next</button>
                        </div>
                    </div>
                }

                {
                    toggle &&
                    <div className='wrapper'>
                        <FormData
                            toggle={toggle}
                            onSetToggle={setToggle}
                            onSubmitHandle={submitHandler}
                        />

                        {
                            isSubmit &&
                            <div className='success-wrapper'>
                                <div className='success-box'>
                                    <FontAwesomeIcon icon={faCheck} className="highlight" color='#ffffff'/>
                                    <p>Submitted Successfully</p>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default CreateAds