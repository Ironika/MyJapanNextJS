import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { ListPaginate, CardScan, CardScansSkeleton } from '../components'
// import { usePaginate } from '../hooks'

const List = (props) => {
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [datas, setDatas] = useState(props.datas || [])
    // const {displayedDatas, setDisplayedDatas, pageToDisplay, setDatas} = usePaginate(3)
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const fetchDatas = async () => {
            let _datas = props.datas
            if(!props.datas)
                _datas = await getApiDatas('scans')
            setDatas(_datas)
            // setDisplayedDatas(_datas.slice(0, pageToDisplay))
            setLoader(false)
        }
        fetchDatas()
    }, []);

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    const fakeArray = Array(6).fill(6)

    return (
        <>
            <h2 onClick={handleClickOpen}>{props.title}<i className={isOpen ? "fa fa-chevron-down" : "fa fa-chevron-right"}></i></h2>
            <div className={isOpen ? "card-container open" : "card-container"}>
            {loader ?
                fakeArray.map((item, index) =>
                    <CardScansSkeleton key={index}/>
                ) :
                datas.length > 0 ?
                    datas.map((item, index) =>
                        <CardScan key={index} data={item} />
                    ) :
                    <div>No Scans Found</div>
            }
            </div>
        </>
    )
}

const Scans = (props) => {
    return (
        <div className="Scans">
            <div className="container">
                <div className="left">
                    <List datas={props.scans} title={'Webtoons or VF'} type={'scans'} />
                </div>
                <div className="right">
                    <ListPaginate datas={props.scansVa} title={'MangaFox'} type={'scansva'} />
                </div>
            </div>
        </div>
    )
}

Scans.getInitialProps = async ({req}) => {
    if(req) {
        const scans = await getApiDatas('scans')
        const scansVa = await getApiDatas('scansva', 2)
        return {scans, scansVa}
    }
    return {}
}

Scans.propTypes = {
    scans: PropTypes.array,
    scansVa: PropTypes.array
}

List.propTypes = {
    datas: PropTypes.array
}

export default Scans
