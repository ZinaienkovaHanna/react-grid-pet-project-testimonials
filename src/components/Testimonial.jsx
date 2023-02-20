import styles from './Testimonial.module.css';

const Testimonial = ({ name, title, img, text, id }) => {
  return (
    <div className={`${styles[id]} ${styles.nameContainer}`}>
      <div className={styles.imgContainer}>
        <img src={`../images/${img}`} alt={name} />
        <div>
          <h2>{name}</h2>
          <h3>'Verified Graduate'</h3>
        </div>
      </div>
      <h1>{title}</h1>
      <p>" {text} "</p>
    </div>
  );
};

export default Testimonial;
