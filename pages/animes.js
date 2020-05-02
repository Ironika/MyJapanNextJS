import React from 'react'
import PropTypes from 'prop-types'
import { getApiDatas } from '../helpers'
import { ListPaginate } from '../components'
import jsHttpCookie from 'cookie'

const Animes = (props) => {
    return (
        <div className="Animes">
            <ListPaginate datas={props.animes} type={'animes'} />
        </div>
    );
}

Animes.getInitialProps = async ({req}) => {
    if(req) {
        const cookiesJSON = jsHttpCookie.parse(req.headers.cookie);
        const _user = cookiesJSON.user ? JSON.parse(cookiesJSON.user) : null
        const uid = _user ? _user.id : null
        const animes = await getApiDatas('animes', 1, null, uid);
        return { animes }
    }
    return {}
}

Animes.propTypes = {
    animes: PropTypes.array
}

export default Animes
