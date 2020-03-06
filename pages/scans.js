import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { Loader, ListPaginate, CardScan } from '../components'

const List = (props) => {
    const [loader, setLoader] = useState(props.datas ? false : true)
    const [datas, setDatas] = useState(props.datas || [])
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const fetchDatas = async () => {
            if(!props.datas) {
                const _datas = await getApiDatas(props.type)
                setDatas(_datas)
            }
            setLoader(false)
        }
        fetchDatas()
    }, []);

    return (
        <>
            <h2 onClick={() => setIsOpen(!isOpen)}>{props.title}<i className={isOpen ? "fa fa-chevron-down" : "fa fa-chevron-right"}></i></h2>
            <div className={isOpen ? "card-container open" : "card-container"}>
            {loader ? <Loader /> :
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
                    <List datas={props.scans} title={'Scantrad'} type={'scans'} />
                </div>
                <div className="center">
                    <ListPaginate datas={props.scansVa} title={'MangaFox'} type={'scansva'} />
                </div>
                <div className="right">
                    <List datas={props.scansWebtoons} title={'Webtoons'} type={'scanswebtoons'} />
                </div>
            </div>
        </div>
    )
}

Scans.getInitialProps = async ({req}) => {
    if(req) {
        const scans = await getApiDatas('scans')
        const scansWebtoons = await getApiDatas('scanswebtoons')
        const scansVa = await getApiDatas('scansva', 2)
        return {scans, scansWebtoons, scansVa}
    }
    return {}
}

Scans.propTypes = {
    scans: PropTypes.array,
    scansWebtoons: PropTypes.array,
    scansVa: PropTypes.array
}

List.propTypes = {
    datas: PropTypes.array
}

export default Scans
