import Link from "next/link";
import classes from './main-header.module.css'

export default function NavLink({ active, children, href }) {
    let linkClasses = active ? classes.active : '';
    return (
        <Link href={href} className={linkClasses}>{children}</Link>
    );
}