import Dropdown from '../Dropdown/Dropdown';
import topSection from '../../assest/images/modal_top.png';
import breaksSection from '../../assest/images/breaks_section.png';
import notesSection from "../../assest/images/notesSection.png"
import './ShiftsModal.scss';
import Button from '../Button/Button';

const ShiftsModal = () => {
    return (
        <div>
            <div>
                <img src={topSection}/>
            </div>
            <div className='rewardsContainer'>
                <img src={breaksSection}/>
                <div>
                    <Dropdown/>
                </div>

            </div>
            <div>
                <img src={notesSection}/>
            </div>
            <div>
                <Button/>
            </div>

        </div>
    );
};

export default ShiftsModal;