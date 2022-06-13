import styles from "./index.module.scss";
import Quadrado from "./exercicio1";

function Exercicio1() {
	return <div className={styles.Exercicio1}><h1 className='title'>Exercicio1</h1>
	<Quadrado class = {styles.Quadrado} />
	</div>
}

export default Exercicio1
