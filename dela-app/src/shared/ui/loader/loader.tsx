import React from 'react';

import cs from './loader.module.scss';
import loader from './svg/loading.svg';

export const Loader = ({children}: React.PropsWithChildren) => {
    return (
        <img alt="Загрузка..." className={cs.loader} src={loader}/>
    );
};
