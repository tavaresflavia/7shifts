import Dropdown from '../Dropdown/Dropdown';
import topSection from '../../assest/images/modal_top.png';
import breaksSection from '../../assest/images/breaks_section.png';
import notesSection from "../../assest/images/notesSection.png"
import './ShiftsModal.scss';
import Button from '../Button/Button';
import modalImg from '../../assets/images/modal.png'

const ShiftsModal = () => {
    return (
        <div className="shift-modal">
            <img src={modalImg} alt="modal"/>

                <div className="shift-modal__drop"> <Dropdown/></div>
               
               <div  className="shift-modal__save"> </div> <Button/>


        </div>
    );
};

export default ShiftsModal;