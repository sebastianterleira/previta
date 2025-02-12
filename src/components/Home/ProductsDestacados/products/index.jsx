import styles from "./product.module.css";

export default function Product({ index, title, manageModal, subtitle, urlPath }) {
  return (
    <a href={urlPath} style={{ width: "100%"}} className={styles.project_anchor}>
      <div
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className={styles.project}
      >
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </a>
  );
}
