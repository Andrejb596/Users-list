import style from './PageNotFound.module.scss';

export default function PageNotFound() {
	return (
		<div className={`${style.pageNotFound} page`}>
			<div className="container">
				<div className={`${style.title} title`}>
					<h1>Page not found</h1>
					<a href="#/Users">Link to base page</a>
				</div>
			</div>
		</div>
	);
};
