let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "It`s my first post", likesCount: 10 },
        ]

    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Yo" },
            { id: 3, message: "Hi! Yo" },
            { id: 4, message: "Hi! Yo" },
            { id: 5, message: "Hi! Yo" },
            { id: 6, message: "Hi! Yo" },
            { id: 7, message: "Hi! Yo" }
        ],
        dialogs: [
            { id: 1, name: "Sergey" },
            { id: 2, name: "Dimych" },
            { id: 3, name: "Marina" },
            { id: 4, name: "Artyom" },
            { id: 5, name: "Ilya" },
            { id: 6, name: "Vlad" },
            { id: 7, name: "Ivan" }
        ]
    },
    sidebar:{}
}

export default state