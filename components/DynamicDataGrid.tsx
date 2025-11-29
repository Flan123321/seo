import styles from './DynamicDataGrid.module.css';

interface DynamicDataGridProps {
    data: Record<string, string | number>;
}

export default function DynamicDataGrid({ data }: DynamicDataGridProps) {
    // Format key from snake_case to Title Case
    const formatKey = (key: string): string => {
        return key
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className={styles.grid}>
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className={styles.card}>
                    <div className={styles.label}>{formatKey(key)}</div>
                    <div className={styles.value}>{value}</div>
                </div>
            ))}
        </div>
    );
}
