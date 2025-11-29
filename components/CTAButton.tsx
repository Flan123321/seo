'use client';

import styles from './CTAButton.module.css';

interface CTAButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
    external?: boolean;
    onClick?: () => void;
}

export default function CTAButton({
    text,
    href,
    variant = 'primary',
    external = true,
    onClick
}: CTAButtonProps) {
    const handleClick = () => {
        // Track click event (you can integrate Google Analytics here)
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'click', {
                event_category: 'affiliate_link',
                event_label: text,
                value: href
            });
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            href={href}
            className={`${styles.button} ${styles[variant]}`}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer sponsored' : undefined}
            onClick={handleClick}
        >
            <span className={styles.text}>{text}</span>
            <span className={styles.icon}>→</span>
        </a>
    );
}
