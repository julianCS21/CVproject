import styles from  './ItemStyle.module.css'


const Item = ({namePage}) =>{
    return <div className={styles.item}>
        <p>{namePage}</p>
    </div>
}


export default Item