/**
 * Created by zh on 2019/11/21.
 */
import React, { Fragment } from 'react';
import styles from './index.module.css';
import logo from '@/assets/images/logo.svg';

export default function() {
  return (
    <Fragment>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </Fragment>
  );
}
