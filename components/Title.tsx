import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Title.module.css'
import * as config from './config/TitleConfig'

type Props = {
    isDarkMode: boolean,
}

function Title(props: Props) {

    const logo = props.isDarkMode ? config.logo_path_DARKMODE : config.logo_path_LIGHTMODE

    return (
    <Head>
        <title>{config.title}</title>
        <meta charSet={config.charSet} />
        <meta name="description" content={config.description} />
        <meta name="viewport" content={config.viewport} />
        <meta name="keywords" content={config.keywords} />
        <link rel="icon" href={logo} type="image/x-icon" />
    </Head>
    )
}

export default Title