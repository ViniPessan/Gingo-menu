import styles from "./style.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return(
  <footer className={styles.footer}>
  <div className={styles.ctaSection}>
    <h2 className={styles.ctaTitle}>Faça seu pedido agora mesmo!</h2>
    <a href="https://wa.me/5518998217272" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
      Fazer pedido no WhatsApp
      <FontAwesomeIcon className={styles.whatsIcon} icon={faWhatsapp} />
    </a>
  </div>

  <div className={styles.infoSection}>
    <div>
      <h4 className={styles.infoSectionTitle}>⏰ Atendimento</h4>
      <p className={styles.infoSectionDescription}>
       Terça e Quarta: Apenas delivery<br />
       Quinta a Domingo: Presencial e delivery <br />
       Das 19h às 23h
      </p>
    </div>
    <div>
      <h4 className={styles.infoSectionTitle}>📍 Endereço</h4>
      <p className={styles.infoSectionDescription}>
        <a href="https://www.google.com/maps?q=Rua+Exemplo,+123+Pacaembu+SP" target="_blank" rel="noopener noreferrer">
        🔗 Rua Engenheiro Prestes Maia, 632 <br /> Esplanada, Pacaembu - SP
        </a>
      </p>
    </div>
    <div>
      <h4 className={styles.infoSectionTitle}>📱 Contato</h4>
      <p className={styles.infoSectionDescription}>
         Email: contato@gingo.com
      </p>
      <p className={styles.infoSectionDescription}> Celular: (18) 99821-7272</p>
    </div>
    <div className={styles.instagramSection}>
      <h4 className={styles.infoSectionTitle}>
        <img src="/instagram.png" alt="insta" className={styles.instagramIcon}/>
        Redes Sociais
      </h4>
      <a href="https://www.instagram.com/gingohamburgueria/" target="_blank" className={styles.infoSectionDescription} >
        🔗 instagram.com/gingohamburgueria
      </a>
    </div>
  </div>

  <div className={styles.copy}>
    <p>© {new Date().getFullYear()} Gingo. Todos os direitos reservados.</p>
    <p> Desenvolvido por <a href="https://portifoliovpr.netlify.app" target="_blank" className="underline">Vinicius Pessan</a></p>
  </div>
</footer>

  )
}