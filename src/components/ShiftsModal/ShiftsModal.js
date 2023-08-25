import Dropdown from '../Dropdown/Dropdown';
import topSection from '../../assest/images/modal_top.png';
import breaksSection from '../../assest/images/breaks_section.png';
import notesSection from "../../assest/images/notesSection.png"
import './ShiftsModal.scss';
import Button from '../Button/Button';
import modalImg from '../../assets/images/modal.png'
import saveImg from "../../assest/images/save_button.png"
import cancelImg from "../../assest/images/cancel_button.png"


const ShiftsModal = () => {
    return (
        <div className="shift-modal">
            <img src={modalImg} alt="modal"/>

                <div className="shift-modal__drop"> <Dropdown/></div>
               
               <div  className="shift-modal__save"> </div> <Button/>

          
            <div>
                <img src={notesSection}/>
            </div>
            <div>
                <Button saveImg={saveImg}/>
                <Button saveImg={cancelImg}/>
            </div>

        </div>
    );
};

export default ShiftsModal;