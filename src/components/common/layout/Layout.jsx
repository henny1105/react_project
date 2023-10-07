import styles from './Layout.module.scss';

export default function Layout(props) {
	return (
		<section className={styles.layout}>
			<figure></figure>

			<div className={styles.content}>
				<h2>{props.title}</h2>
				{props.children}
			</div>
		</section>
	);
}
