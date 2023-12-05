import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: null,
        pfp: null,
        userName: null,
        password: null,
        email: null,
        contact: [],
        role: null,
        addedWaste: [],
        requestedWaste: [],
        recycledWaste: []
    },
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.contact = action.payload.contact;
            state.addedWaste = action.payload.addedWaste;
            state.requestedWaste = action.payload.requestedWaste;
            state.recycledWaste = action.payload.recycledWaste;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        addWaste: (state, action) => {
            state.addedWaste.push(action.payload);
        },
        requestWaste: (state, action) => {
            state.requestedWaste.push(action.payload);
        },
        recycleWaste: (state, action) => {
            // Check if wasteId is in addedWaste array
            const addedIndex = state.addedWaste.indexOf(action.payload);
            if (addedIndex !== -1) {
                return {
                    ...state,
                    addedWaste: state.addedWaste.filter(id => id !== action.payload),
                    recycledWaste: [...state.recycledWaste, action.payload]
                };
            }

            // Check if wasteId is in requestedWaste array
            const requestedIndex = state.requestedWaste.indexOf(action.payload);
            if (requestedIndex !== -1) {
                return {
                    ...state,
                    requestedWaste: state.requestedWaste.filter(id => id !== action.payload),
                    recycledWaste: [...state.recycledWaste, action.payload]
                };
            }

            return state;
        },
        addContact: (state, action) => {
            state.contact.push(action.payload);
        }
    }
});


export const { setUser, addWaste, requestWaste, recycleWaste, setRole, addContact } = userSlice.actions;
export default userSlice.reducer;