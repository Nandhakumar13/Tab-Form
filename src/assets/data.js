import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Additional from '../pages/Additional';

export const tabHeadData = [
    {
        id:1,
        title:"Personal Info",
    },
    {
        id:2,
        title:"Contact",
    },
    {
        id:3,
        title:"Preferences",
    }
]

export const tabContainerData = [
    {
        id:1,
        content:Profile,
        validaion: () => {

        },
        error:{}
    },
    {
        id:2,
        content:Contact
    },
    {
        id:3,
        content:Additional
    }
]