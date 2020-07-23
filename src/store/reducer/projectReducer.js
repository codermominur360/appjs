const initState={
    projects:[
        {id:'1', title:'this is a title one  ', content:'project content here '},
        {id:'2', title:'this is a title two', content:'project content here '},
        {id:'3', title:'this is a title three', content:'project content here '},
    ]
}

const projectReducer =(state=initState, action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log("my project Data is here " , action.project)
            return state    
        case 'CREATE_PROJECT_ERROR':
            console.log('error data', action.err)
            return state;
        default:
            return state;
        }
}

export default projectReducer