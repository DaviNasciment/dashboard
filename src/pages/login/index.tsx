import styles from './styles.module.scss';

export default function Login() {
  return (
    <section className={styles.section}>
      
      <form onSubmit={(e) => {}}
        className={styles.form}
      >
        <div className={styles.headerForm}>
          <h1 className={styles.title}>
            Entrar
          </h1>
          <p>Entre com as suas credenciais.</p>
        </div>

        <div className={styles.content}>
            <label>Email</label>
            <input 
              type="email"
              name="email" 
              placeholder="Email"
              className={styles.input} 
              />
            <label>Senha</label>
            <input 
              type="text"
              name="password" 
              placeholder="Senha"
              className={styles.input} />

              <button >
                Entrar
              </button>
        </div>
      </form>
    </section>
  )
}

