import react from 'react';
import styles from '../Styles/Percentage.module.css';
const Tenth = ({close}) => {
    return(
        <div className={styles.container}>
            <div className={styles.closebtn}><i className="bi bi-x-lg" onClick={close}></i></div>
            <div className={styles.header}>10<sup>th</sup> Marks</div>
            <div className={styles.row}><div className={styles.head}>455<code>/500</code></div>Secured with 91%</div>
            <table>
                <thead>
                <tr><th>Subject</th><th>Marks (out of 100)</th></tr>
                </thead><tbody>
                <tr>
                    <td>Tamil</td><td>89</td>
                </tr>
                <tr>
                    <td>English</td><td>85</td>
                </tr>
                <tr>
                    <td>Mathematics</td><td>98</td>
                </tr>
                <tr>
                    <td>Science</td><td>90</td>
                </tr>
                <tr>
                    <td>Social Science</td><td>93</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tenth;