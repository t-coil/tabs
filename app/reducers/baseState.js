const savedTabs = JSON.parse(localStorage.getItem('tabs'));
const savedSelected = localStorage.getItem('selectedTab');
const savedModal = JSON.parse(localStorage.getItem('isModalOpen'));


const baseState = {
    tabs: savedTabs || [],
    selectedTab: savedSelected || '',
    isModalOpen: savedModal || false
};

export default baseState;
