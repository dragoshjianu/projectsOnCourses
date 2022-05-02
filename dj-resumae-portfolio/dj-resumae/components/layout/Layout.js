import styles from './Layout.module.css';

const Layout = (props) => {
	return <main className={styles.main}>{props.childern}</main>;
};

export default Layout;
