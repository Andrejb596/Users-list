import style from './footer.module.scss';
import { facebook, linkedin, twitter, youtube } from "./assets/socialIcons";
import { Logo } from "../Logo/Logo";
import { links } from "../../data/data";

export const Footer = () => (
	<div className={style.footer}>
		<div className="container">
			<div className={style.wrapper}>
				<div className={style.info}>
					<Logo>Users list</Logo>
					<p>Simple solutions for the complex problems</p>
					<div className={style.socials}>
						<a href={links.firstLink}>
							<img src={facebook} alt="facebook" />
						</a>
						<a href={links.firstLink}>
							<img src={linkedin} alt="linkedin" />
						</a>
						<a href={links.firstLink}>
							<img src={twitter} alt="twitter" />
						</a>
						<a href={links.firstLink}>
							<img src={youtube} alt="youtube" />
						</a>
					</div>
				</div>
				<div className={style.nav}>
					<div className={style.block}>
						<h4>DETAILS</h4>
						<ul>
							<li>
								<a href={links.firstLink}>Booking</a>
							</li>
							<li>
								<a href={links.firstLink}>Payment</a>
							</li>
							<li>
								<a href={links.firstLink}>Terms</a>
							</li>
							<li>
								<a href={links.firstLink}>Politics</a>
							</li>
						</ul>
					</div>
					<div className={style.block}>
						<h4>CONTACTS</h4>
						<ul>
							<li>
								<a href={links.firstLink}>Contact us</a>
							</li>
							<li>
								<a href={links.firstLink}>Facebook</a>
							</li>
							<li>
								<a href={links.firstLink}>Instagram</a>
							</li>
							<li>
								<a href={links.firstLink}>YouTube</a>
							</li>
						</ul>
					</div>
					<div className={style.block}>
						<h4>COMPANY</h4>
						<ul>
							<li>
								<a href={links.firstLink}>About company</a>
							</li>
							<li>
								<a href={links.firstLink}>Work with us</a>
							</li>
							<li>
								<a href={links.firstLink}>Press</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={style.copyright}>
				© 2022 All rights reserved
			</div>
		</div>
	</div>
);
