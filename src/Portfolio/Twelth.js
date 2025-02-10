import react from 'react';
import styles from '../Styles/Percentage.module.css';
const Twelth = ({close}) => {
    return(
        <div className={styles.container}>
            <div className={styles.closebtn}><i className="bi bi-x-lg" onClick={close}></i></div>
            <div className={styles.header}>12<sup>th</sup> Marks</div>
            <div className={styles.row}><div className={styles.head}>573<code>/600</code></div>Secured with 95.5%</div>
            <table>
                <thead>
                <tr><th>Subject</th><th>Marks (out of 100)</th></tr>
                </thead><tbody>
                <tr>
                    <td>Tamil</td><td>96</td>
                </tr>
                <tr>
                    <td>English</td><td>93</td>
                </tr>
                <tr>
                    <td>Mathematics</td><td>91</td>
                </tr>
                <tr className={styles.centum}>
                    <td>Computer Science</td><td>100</td>
                </tr>
                <tr className={styles.centum}>
                    <td>Chemistry</td><td>100</td>
                </tr>
                <tr>
                    <td>Physics</td><td>91</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Twelth;