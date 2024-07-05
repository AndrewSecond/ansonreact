import styles from './styles.module.css';

export default function UserUsername(props) {
    return (
        <>
            <b>Username: </b>
            <span className={styles.username}>{props}</span>
        </>
    )
}
