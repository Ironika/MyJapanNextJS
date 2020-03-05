import React from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { ListPaginate } from '../components'

const Animes = (props) => {
    return (
        <div className="Animes">
            <ListPaginate datas={props.animes} type={'animes'} />
        </div>
    );
}

Animes.getInitialProps = async ({req}) => {
    if(req) {
        const animes = await getApiDatas('animes', 2);
        return { animes }
    }
    return {}
}

Animes.propTypes = {
    animes: PropTypes.array
}

export default Animes
