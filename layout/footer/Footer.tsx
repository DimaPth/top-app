import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<span className={styles.rules}>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</span>
			<a href="" target="_blank" className={styles.user}>
				Пользовательское соглашение
			</a>
			<a href="" target="_blank" className={styles.politics}>
				Политика конфиденциальности
			</a>
		</footer>
	);
};
