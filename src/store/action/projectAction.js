export const projectAction =(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call to database
        const firestore=getFirestore();
        firestore.collection("project").add({
            ...project,
            authorFirstName:'admin',
            authorLastName : 'admin',
            authorId:56789,
            createAt : new Date()
        }).than(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR',err})
        }) 

    }
}