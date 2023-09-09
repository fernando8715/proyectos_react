import IconoCerrar from '../img/cerrar.svg';


export const Modal = ({setModal, animarModal, setAnimarModal}) => {


    const handleOcultarModal = ()=> {
        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <img 
                src={IconoCerrar} 
                alt="button cerrar modal" 
                onClick={handleOcultarModal}
            />
        </div>

        <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            
        </form>
    </div>
  )
}
