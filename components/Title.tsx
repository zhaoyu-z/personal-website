import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Title.module.css';
import * as config from './config/Title.config';

function Title() {

    const logo = config.logo_path;

    return (
        <Head>
            <title>{config.title}</title>
            <meta charSet={config.charSet} />
            <meta name="description" content={config.descriptions.a} />
            {/* <meta name="description" content={config.descriptions.b} /> */}
            <meta name="viewport" content={config.viewport} />
            <meta name="keywords" content={config.keywords} />
            <link rel="icon" href={logo} type="image/x-icon" />
        </Head>
    );
};

export default Title;