import data from '../data/data';
import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.mainContainer}>
      {data.map((testimonial) => (
        <Testimonial key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
