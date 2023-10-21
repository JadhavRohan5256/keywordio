import { React, useState } from 'react'
import './FormData.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { object, string } from 'yup';
import { useFormik } from 'formik';

function FormData(props) {
    const { onSubmitHandle, toggle, onSetToggle } = props;
    const [isButtonLabel, setIsButtonLabel] = useState(false)

    let textMediaSchema = object({
        heading_01: string()
            .min(3, "the length should minimum 3")
            .required("heading_01 is required"),
        heading_02: string()
            .min(3, "the length should minimum 3")
            .required("heading_02 is required"),
        description_01: string()
            .required("description_01 is required")
            .min(50, "the length should minimum 50")
            .max(1000, "the length should maximum 50"),
        business_name: string()
            .required("bussiness name is required"),
        button_label: string()
            .required("buttton label is required"),
        website_url: string().required("website url is required.").url("please provide valid url"),
    });

    const { values, touched, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: {
            heading_01: '',
            heading_02: '',
            description_01: '',
            business_name: '',
            button_label: '',
            website_url: '',
        },
        validationSchema: textMediaSchema,
        onSubmit: values => {
            onSubmitHandle(values)
        },
    });

    return (
        <form className='form-wrapper' onSubmit={handleSubmit}>
            <div className='form-wrapper-top'>
                <div className='two-column'>
                    <div className='first-column'>
                        <div className='box'>
                            <label htmlFor='heading_01'>
                                Heading 01
                            </label>
                            <input
                                type='text'
                                name='heading_01'
                                id='heading_01'
                                placeholder='Add a heading that would make user interested'
                                value={values.heading_01}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors?.heading_01 && touched?.heading_01 &&
                                <small className="form-errors">{errors?.heading_01}</small>
                            }
                        </div>
                        <div className='box'>
                            <label htmlFor='heading_02'>
                                Heading 02
                            </label>
                            <input
                                type='text'
                                name='heading_02'
                                id='heading_02'
                                placeholder='Add a heading that would make user interested'
                                value={values.heading_02}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors?.heading_02 && touched?.heading_02 &&
                                <small className="form-errors">{errors?.heading_02}</small>
                            }
                        </div>
                    </div>
                    <div className='second-column'>
                        <div className='box'>
                            <label htmlFor='description_01'>
                                Description 01
                            </label>
                            <textarea
                                type='text'
                                name='description_01'
                                id='description_01'
                                placeholder='Add primary text to help users understand more about your products, services or offers'
                                value={values.description_01}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            </textarea>
                            {
                                errors?.description_01 && touched?.description_01 &&
                                <small className="form-errors">{errors?.description_01}</small>
                            }
                        </div>
                    </div>
                </div>

                <div className='two-column'>
                    <div className='box'>
                        <label htmlFor='business_name'>
                            Business Name
                        </label>
                        <input
                            type='text'
                            name='business_name'
                            id='business_name'
                            placeholder='Add your business name'
                            value={values.business_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {
                            errors?.business_name && touched?.business_name &&
                            <small className="form-errors">{errors?.business_name}</small>
                        }
                    </div>
                    <div className='box'>
                        <label htmlFor='button_label'>
                            Button Label
                        </label>
                        <button type="button" onClick={() => setIsButtonLabel(!isButtonLabel)}>
                            <span>
                                {!values.button_label ? 'Select a label that best suits your ad' : values.button_label}
                            </span>
                            <span className='chevron'>
                                <FontAwesomeIcon icon={isButtonLabel ? faChevronUp : faChevronDown} />
                            </span>
                        </button>
                        {
                            errors?.button_label && touched?.button_label &&
                            <small className="form-errors">{errors?.button_label}</small>
                        }
                        <div className={isButtonLabel === true ? 'option-wrapper open' : 'option-wrapper'}>
                            <div className='option'>
                                <input
                                    type='radio'
                                    name='button_label'
                                    value={'value_01'}
                                    id='value_01'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="value_01" onClick={() => setIsButtonLabel(!isButtonLabel)} >Select a label that best suits your ad</label>
                            </div>
                            <div className='option'>
                                <input
                                    type='radio'
                                    name='button_label'
                                    value={'value_02'}
                                    id='value_02'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="value_02" onClick={() => setIsButtonLabel(!isButtonLabel)} >Select a label that best suits your ad</label>
                            </div>
                            <div className='option'>
                                <input
                                    type='radio'
                                    name='button_label'
                                    value={'value_03'}
                                    id='value_03'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="value_03" onClick={() => setIsButtonLabel(!isButtonLabel)} >Select a label that best suits your ad</label>
                            </div>
                            <div className='option'>
                                <input
                                    type='radio'
                                    name='button_label'
                                    value={'value_04'}
                                    id='value_04'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="value_04" onClick={() => setIsButtonLabel(!isButtonLabel)} >Select a label that best suits your ad</label>
                            </div>
                            <div className='option'>
                                <input
                                    type='radio'
                                    name='button_label'
                                    value={'value_05'}
                                    id='value_05'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <label htmlFor="value_05" onClick={() => setIsButtonLabel(!isButtonLabel)} >Select a label that best suits your ad</label>
                            </div>
                            <div className='option'>
                                <input
                                    type='radio'
                                    name='button_label'
                                    value={'value_06'}
                                    id='value_06'
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                <label htmlFor="value_06" onClick={() => setIsButtonLabel(!isButtonLabel)} >Select a label that best suits your ad</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='two-column'>
                    <div className='box'>
                        <label htmlFor='website_url'>
                            Website URL
                        </label>
                        <input
                            type='text'
                            name='website_url'
                            id='website_url'
                            placeholder='Add the URL of the landing page you want to redirect users to'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {
                            errors?.website_url && touched?.website_url &&
                            <small className="form-errors">{errors?.website_url}</small>
                        }
                    </div>
                </div>
            </div>
            <div className='btn-wrapper'>
                <button className='back-btn btn' onClick={() => onSetToggle(!toggle)}>
                    Back
                </button>
                <button className='submit-btn btn' type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default FormData