import * as React from 'react'
import Head from 'next/head'
import styles from '../styles/Title.module.css'

type Props = {
    isDarkMode: boolean,
}

function Title(props: Props) {

    const [logo, setLogo] = React.useState<string>(props.isDarkMode ? "../ZZY_LOGO_WHITE.svg" : "../ZZY_LOGO.svg")

    return (
    <Head>
        <title >Zhaoyu Zhang</title>
        <meta name="description" content="Zhaoyu Zhang's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="zhaoyu zhang, Zhaoyu Zhang, personal website"></meta>
        <link rel="icon" href={logo} type="image/x-icon" />
    </Head>
    )
}

export default Title