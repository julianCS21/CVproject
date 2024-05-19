import styles from './ItemStyle.module.css';
import { FaHome, FaUserAlt, FaProjectDiagram, FaCertificate, FaEnvelope } from 'react-icons/fa';

const Item = ({ namePage }) => {
    let icon;
    switch (namePage) {
        case 'Home':
            icon = <FaHome />;
            break;
        case 'About me':
            icon = <FaUserAlt />;
            break;
        case 'Projects':
            icon = <FaProjectDiagram />;
            break;
        case 'Certifications':
            icon = <FaCertificate />;
            break;
        case 'Contact me':
            icon = <FaEnvelope />;
            break;
        default:
            icon = null;
    }

    return (
        <div className={styles.item}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <p className={styles.text}>{namePage}</p>
        </div>
    );
};

export default Item;
