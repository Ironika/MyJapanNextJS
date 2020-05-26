import React, { useState } from 'react'
import Tilt from 'react-tilt'
import PropTypes from 'prop-types'
import { useUser } from '../hooks'
import { postApiDatas, putApiDatas, getApiDatas } from '../helpers'
import Modal from 'react-modal';
import LazyLoad from 'react-lazyload'
import Select from 'react-select';
import { Loader } from '../components'

const CardScanVa = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(props.data.isBookmarked ? props.data.isBookmarked : false)
    const { user } = useUser()
    const [isOpen, setIsOpen] = useState(false)
    const [reader, setReader] = useState([])
    const [selectedChapter, setSelectedChapter] = useState({label: 'Chapter ' + props.data.chapt.split(' ')[1].replace(':', ''), value: props.data.chapt.split(' ')[1].replace(':', '')})
    const [options, setOptions] = useState([])
    const [loader, setLoader] = useState(false)
    const [accessDenied, setAccessDenied] = useState(false)
    const [currentLink, setCurrentLink] = useState('')

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width                 : '80%',
          textAlign             : 'center',
          height                : '100%'
        },
        overlay : {
            zIndex              : '100',
            backgroundColor     : 'rgba(0, 0, 0, 0.75)'
        }
      };
    Modal.setAppElement('#__next')

    const handleClick = async(e) => {
        e.preventDefault()
        // window.open(props.data.link, '_blank')
        const reader = await getApiDatas('scansva', null, null, null, null, props.data.link)
        setReader(reader.scans)
        setOptions(reader.options)
        setIsOpen(true)
    }

    const handleClickBookmark = async(e, scan) => {
        e.preventDefault();
        e.stopPropagation();

        scan.isBookmarked = true
        const datas = { datas: scan, type: 'scans' }

        if(isBookmarked)
            await putApiDatas(`users/${user.id}`, datas)
        else
            await postApiDatas(`users/${user.id}`, datas)

        setIsBookmarked(!isBookmarked)
    }

    const handleClickBookmarkModal = async() => {
        let newScan = {...props.data}
        newScan.chapt = selectedChapter.label
        newScan.link = currentLink
        newScan.isBookmarked = true
        const datas = { datas: newScan, type: 'scans' }
        await postApiDatas(`users/${user.id}`, datas)
        setIsBookmarked(true)
    }

    const handleChangeOptions = async(selectedOpt) => {
        setLoader(true)
        const chapt = '_' + props.data.chapt.split(' ')[1].replace(':', '')
        const newLink = props.data.link.replace(chapt, '_' + selectedOpt.value)
        setSelectedChapter(selectedOpt)
        const reader = await getApiDatas('scansva', null, null, null, null, newLink)
        setCurrentLink(newLink)
        setReader(reader.scans)
        setAccessDenied(false)
        setLoader(false)
    }

    const handleAccessDeniedImg = () => {
        if(!accessDenied)
            window.open(currentLink, '_blank')
        setAccessDenied(true)
    }

    const style = { backgroundImage: 'url(' + props.data.img + ')' }

    return (
        <>
        <Tilt className={props.isInProfile ? "tilt tilt-va card-profile" : "tilt tilt-va"}>
            <div className="card-scans-va" style={style} onClick={handleClick}>
                {user && <i title="Click to bookmark" className={isBookmarked ? 'fa fa-star' : 'fa fa-star-o'} onClick={(e) => handleClickBookmark(e, props.data)}></i> }
                <a href={props.data.link} className="card-scans-va-content" target="_blank" rel="noopener noreferrer">
                    <p className="date">{props.data.chapt}</p>
                    <h3>{props.data.title}</h3>
                    <button>{props.data.lang}</button>
                </a>
            </div>
        </Tilt>
        {isOpen && <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            >
            <span className="close" onClick={() => setIsOpen(false)}>Close<i className="fa fa-remove"></i></span>
            <div className="nav-modal">
                <div className="select-container">
                    <Select value={selectedChapter} options={options} onChange={handleChangeOptions} classNamePrefix='custom-select' />
                </div>
                { user && <button onClick={handleClickBookmarkModal} className="addBookmark" disabled={(isBookmarked && props.data.chapt.split(' ')[1] === selectedChapter.value) ? true : false}><i className={(isBookmarked && props.data.chapt.split(' ')[1] === selectedChapter.value) ? 'fa fa-star' : 'fa fa-star-o'}></i><span>Add to Bookmark</span></button>}
            </div>
            {loader ?
                <Loader/> :
                accessDenied ?
                <div>Access Denied by Magakakalot, <a href={currentLink} target="_blank">go to website</a></div> :
                <div className="reader">
                    { reader.map((img, i) =>
                        <LazyLoad key={i}>
                            <img src={img} alt='scans' onError={handleAccessDeniedImg}/>
                        </LazyLoad>)
                    }
                </div>
            }
        </Modal>}
        </>
    )
}

CardScanVa.propTypes = {
    data: PropTypes.object.isRequired
}

export default CardScanVa