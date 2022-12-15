
 const user = JSON.parse(localStorage.getItem('userData'))
 const isUser = !!user;
 const isnotUser = !user;

export const SettingsData =[
    
    {
        title: 'Change Password',
        path: '/ChangePassword',
        icon: <img src="./icons/Ayuda/llave.png"></img>,
        description: "Change your password at any moment",
        isUser:true
    },
    {
        title: 'Change View',
        path: '/ChangeView',
        icon: <img src="./icons/Ayuda/paleta.png"></img>,
        description: "Change the palette of our app",
        isUser:true,
        isnotUser:true
    },
    {
        title: 'Change Language',
        path: '/ChangeLanguage',
        icon: <img src="./icons/Ayuda/mundo.png"></img>,
        description: "Change the palette of our app",
        isUser:true,
        isnotUser:true
    },
    {
        title: 'Delete your Account',
        path: '/DeleteAccount',
        icon: <img src="./icons/Ayuda/basura.png"></img>,
        description: "Delete your current account",
        isUser:true
    },
    {
        title: 'Control Emails Sent',
        path: '/EmailSent',
        icon: <img src="./icons/Ayuda/sobre.png"></img>,
        description: "Control if you want to receive notifications from us or not.",
        isUser:true
    },
    {
        title: 'Help',
        path: '/ChangePassword',
        icon: <img src="./icons/Ayuda/interrogatorio.png"></img>,
        description: "See how to navigate and perform all actions",
        isUser:true,
        isnotUser:true
    },
]